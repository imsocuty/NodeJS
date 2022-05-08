let mysql = require('mysql');
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sys',
    port: '3306'
});
module.exports = db;
//# sourceMappingURL=mysql-db.js.map