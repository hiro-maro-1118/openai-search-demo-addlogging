# 本ソースの概要
Microsoftのサンプルコード【本体】を参考にCosmosDBにGPTとのやり取りを記録する実装を追加しました。CosmosDBへの書き込みにあたって、参考にしたコードは【CosmosDB】のリポジトリを参照ください。

---

## 【参考リポジトリ】
- 【本体】https://github.com/asashiho/azure-search-openai-demo
- 【CosmosDB】https://github.com/Azure-Samples/jp-azureopenai-samples/tree/main/5.internal-document-search


## 【デプロイ方法】

```
cd backend
az webapp up --resource-group <リソースグループ名> --name <AppService名>
```


## 【環境構築】
**1. Azure OpenAI**
- モデルのデプロイ

|  デプロイ名  |  モデル名  |
| ---- | ---- |
|  davinci  |  gpt-35-turbo  |
|  chat  |  gpt-35-turbo  |
|  embedding  |  gpt-embedding-ada02  |

**2. Storage Account**
- 好きな名前でStorageAccountを作成する
- コンテナの名前は任意でよいが、「content」とした方が分かりやすい

**3. AppService**
- 好きな名前でAppServiceを作成する
- プリンシパルIDの作成
  - Azureポータルで作成したAppServiceを開き、「状態」をオンにする。
- 構成⇒アプリケーション設定⇒新しいアプリケーション設定で以下の変数を追加

|  変数名  |  値  |
| ---- | ---- |
|  AZURE_OPENAI_CHATGPT_DEPLOYMENT  |  chat  |
|  AZURE_OPENAI_EMB_DEPLOYMENT  |  embedding  |
|  AZURE_OPENAI_GPT_DEPLOYMENT  |  davinci  |
|  AZURE_OPENAI_SERVICE  |  AOAIのデプロイ名  |
|  AZURE_SEARCH_INDEX  |  Cognitive Searchで作成したインデックス名  |
|  AZURE_SEARCH_SERVICE  |  Cognitive Searchのデプロイ名  |
|  AZURE_STORAGE_ACCOUNT  |  StorageAccountのデプロイ名  |
|  AZURE_STORAGE_CONTAINER  |  StorageAccountで作成したコンテナ名  |
|  ENABLE_ORYX_BUILD  |  True  |
|  SCM_DO_BUILD_DURING_DEPLOYMENT  |  True  |
|  AZURE_COSMOSDB_ENDPOINT  |  CosmosDBのURI  |
|  AZURE_COSMOSDB_DATABASE  |  データベース名  |
|  AZURE_COSMOSDB_CONTAINER  | コンテナ名  |

- 構成⇒全般設定⇒スタックの設定⇒スタートアップコマンドで以下の設定
```
python3 -m gunicorn "app:create_app()”
```
- 認証設定を行う（ログにユーザIDを出力する）
  - 認証⇒IdPの追加
  - Microsoftを選択し、あとは基本デフォルト設定

**4. Cognitive Search**
- 好きな名前でCognitiveSearchを作成する
- プリンシパルIDの作成
  - Azureポータルで作成したCognitiveSearchを開き、「状態」をオンにする。
- 設定⇒キー⇒「両方」を選択
- セマンティック検索を「Free」を選択

**5. Cosmos DB**
- 好きな名前でCosmosDBを作成する
- RBACの構築
  - 【参考】https://github.com/Azure-Samples/jp-azureopenai-samples/blob/main/5.internal-document-search/scripts/cosmosreadwriterole.json
```
resourceGroupName='リソースグループ名'
accountName='CosmosDBアカウント名'
readOnlyRoleDefinitionId='00000000-0000-0000-0000-000000000002' # as fetched above
# For Service Principals make sure to use the Object ID as found in the Enterprise applications section of the Azure Active Directory portal blade.
principalId='AppServiceのプリンシパルID'
az cosmosdb sql role assignment create --account-name $accountName --resource-group $resourceGroupName --scope "/" --principal-id $principalId --role-definition-id $readOnlyRoleDefinitionId
```
**6. Document Intelligence**
- 好きな名前でDocumentIntelligenceを作成する

**6. ネットワーキング**
- Vnet、サブネットの作成
- AppService
  - ネットワーク⇒Vnet統合
    - サブネットを選択
- StorageAccount、DocumentIntelligence、AOAI
  - ネットワーク⇒「選択したネットワークとプライベートエンドポイント」
  - Vnet統合時に選択したサブネットを選択
  - StorageAccountはファイアウォールとして自身のアドレスを追加しておく（いらないかもしれない）
- CognitiveSearch、CosmosDB
  - パブリックネットワークアクセスは「無効」
  - プライベートアクセスでエンドポイントを作成
  - ターゲットサブリソースは「searchService」を選択し、作成したCognitiveSearchの名前を選択する


## ToDo
- prepdoc.shがローカル環境から実行することが出来るようにする
- embeddingを使った検索

## 参考
-CosmosDBログ
```
{
    "approach": "chat",
    "user": "XXXXXXXXXXXXXXXXXXXXXXXXXX",
    "tokens": 4547,
    "input": "水素ハイブリッド電車とはなんですか",
    "response": "水素ハイブリッド電車は、鉄道輸送において持続可能なエネルギー源として注目されている車両です。この車両は、燃料電池とバッテリーを組み合わせた駆動システムを使用しています。燃料電池は、水素と酸素の化学反応により電力を発生するデバイスであり、水素を燃料として使用します。一方、バッテリーはエネルギーを貯蔵し、必要に応じて電力を供給する役割を果たします。この組み合わせにより、高いエネルギー効率と低い環境負荷を実現することができます。水素ハイブリッド電車は、高い走行能力と短時間の給水が特徴であり、静音性と快適な乗り心地も提供します。",
    "query": "水素ハイブリッド電車とは何ですか",
    "id": "eec44ae4-d018-4713-b7ca-8513e1bfdbe7",
    "_rid": "D5EvAPTZcUIWAAAAAAAAAA==",
    "_self": "dbs/D5EvAA==/colls/D5EvAPTZcUI=/docs/D5EvAPTZcUIWAAAAAAAAAA==/",
    "_etag": "\"08000644-0000-2300-0000-653df1180000\"",
    "_attachments": "attachments/",
    "_ts": 1698558232
}
```