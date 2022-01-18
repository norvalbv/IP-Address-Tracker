const dotenv = require('dotenv');
const result = dotenv.config();

// if (result.error) {
//     throw result.error;
// }

// The above code statement causes an error when uploading to Heroku
// because it can't detect the .env file (which was purposely gitignored).

module.exports = {
    stage: process.env.NODE_ENV,
    port: process.env.PORT || 4000,
    keyMap: process.env.API_KEY_MAP,
    keyID: process.env.API_KEY_ID
}

// This file is to simply outline a config is possible and to remap the process.env files to new, more simpler variable names(keys).