/* codded by afnanplk
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Das-x5 Special Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {

 OA_AI: process.env.Z_TOXIC_AI === undefined ? true : process.env.Z_BOTNAME,  
 OB_NAME: process.env.Z_BOT_NAME === undefined ? 'Toxic_ser' : process.env.Z_BOT_NAME,
 OA_NAME: process.env.Z_DEP_NAME === undefined ? 'Das-x5' : process.env.Z_DEP_NAME,
 OA_REPLY: process.env.Z_DEP_REPLY === undefined ? 'Das-x5 is my creator his full name is Asmidas' : process.env.Z_DEP_REPLY,
    

};
