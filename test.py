
import json
import logging
from logging import config

logger = logging.getLogger(__name__)
with open('backend/log_config.json', 'r') as f:
    log_conf = json.load(f)

config.dictConfig(log_conf)

logger.info("test")