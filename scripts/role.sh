resourceGroupName='openai-search-demo'
accountName='cdb-openai-search-demo'
readOnlyRoleDefinitionId='00000000-0000-0000-0000-000000000002' # as fetched above
# For Service Principals make sure to use the Object ID as found in the Enterprise applications section of the Azure Active Directory portal blade.
principalId='e2108a24-c6e7-4590-880e-2f8d7916a72c'
az cosmosdb sql role assignment create --account-name $accountName --resource-group $resourceGroupName --scope "/" --principal-id $principalId --role-definition-id $readOnlyRoleDefinitionId

