let mysqlDB = require('../mysql-db');

export default class Users {
    static getUsers(params:Array<String>) {
        return new Promise((resolve, reject) => {
            mysqlDB.query('select * from test_user where id=? and pw=?', params, function (err:object, rows:Array<object>, fields:object) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(rows);

            })
        })
    }
}