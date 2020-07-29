const pool = require("./database");

const helpers = {
    executeQuery: (sql, params = []) => {
        return new Promise((resolve, reject) => {
            pool.query(sql,params,(err, res) => {
                if(err) return reject(err)
                return resolve(res)
            })
        })
    }
}

module.exports = helpers;