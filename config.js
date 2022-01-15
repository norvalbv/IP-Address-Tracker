const dotenv = require('dotenv');
const result = dotenv.config();

if (result.error) {
    throw result.error;
}

module.exports = {
    stage: process.env.NODE_ENV,
    port: process.env.PORT || 4000,
    keyMap: process.env.API_KEY_MAP,
    keyID: process.env.API_KEY_ID
}

// This file is to simply outline a config is possible and to remap the process.env files to new, more simpler variable names(keys).