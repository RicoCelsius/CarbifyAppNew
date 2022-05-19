var fs = require('fs');
const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host     : 'carbifyfontys.mysql.database.azure.com',
//     user     : 'EnzoKnol',
//     password : 'KnolPower!',
//     database : 'users',
//     ssl: true
// });

const connection=mysql.createConnection({
    host:"carbifyfontys.mysql.database.azure.com",
    user:"EnzoKnol",
    password:"KnolPower!",
    database:"users",
    port:3306,
    ssl:{ca:fs.readFileSync("DigiCertGlobalRootCA.crt.pem")}
});

connection.connect((error) => {
    if(error){
        console.log(error.message);
    }
});

module.exports = connection;