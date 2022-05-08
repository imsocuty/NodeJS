let mysqlDB = require('../mysql-db');

export default class Users {
    static getUsers(params) {
        return new Promise((resolve, reject) => {
            mysqlDB.query('select * from test_user where id=? and pw=?', params, function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(rows);

            })
        })
    }
}