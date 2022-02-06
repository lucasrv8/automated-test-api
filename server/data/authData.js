const database = require('../infra/database')

exports.findUserByUsernameAndPassword = function(username, password){
    return database.query('SELECT * from automated_test_api."user" WHERE username = $1 and password = $2', [username, password])
}