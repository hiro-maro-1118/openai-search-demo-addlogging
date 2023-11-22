 #!/bin/bash

# echo 'Creating python virtual environment "scripts/.venv"'
# python3 -m venv scripts/.venv

# echo 'Installing dependencies from "requirements.txt" into virtual environment'
./scripts/.venv/bin/python -m pip install -r requirements_script.txt

AZURE_STORAGE_ACCOUNT=
AZURE_STORAGE_CONTAINER=
AZURE_SEARCH_SERVICE=
AZURE_OPENAI_SERVICE=
AZURE_OPENAI_EMB_DEPLOYMENT=
AZURE_SEARCH_INDEX=
AZURE_FORMRECOGNIZER_SERVICE=
AZURE_TENANT_ID=
AZURE_SEARCH_KEY=
AZURE_DI_KEY=
AZURE_STORAGE_KEY=
AZURE_OPEN_AI_KEY=

# echo 'Running "prepdocs.py"'
.venv/bin/python ./scripts/prepdocs.py './data/*' --storageaccount "$AZURE_STORAGE_ACCOUNT" --container "$AZURE_STORAGE_CONTAINER" --searchservice "$AZURE_SEARCH_SERVICE" --openaiservice "$AZURE_OPENAI_SERVICE" --openaideployment "$AZURE_OPENAI_EMB_DEPLOYMENT" --index "$AZURE_SEARCH_INDEX" --formrecognizerservice "$AZURE_FORMRECOGNIZER_SERVICE" --tenantid "$AZURE_TENANT_ID"  --searchkey "$AZURE_SEARCH_KEY" --formrecognizerkey "$AZURE_DI_KEY" --storagekey "$AZURE_STORAGE_KEY" --openaikey "$AZURE_OPEN_AI_KEY" -v