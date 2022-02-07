const database = require('../infra/database')

exports.getUsers = function(){
    return database.query('select * from automated_test_api."user"')
}

exports.getUser = async function(id){
    return database.query('select * from automated_test_api."user" WHERE id = $1', id)
}