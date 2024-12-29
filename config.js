const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'SEON-MD=yFN2BAZR#-PTNL-ImBCT1tLELjcOGP2Q-KCwILvZscUR_0kYoPIE' : process.env.SESSION_ID,
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? 'Put your github username': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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': process.env.GITHUB_AUTH_TOKEN
};
