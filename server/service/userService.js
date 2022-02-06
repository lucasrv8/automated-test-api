const userData = require('../data/userData')

exports.getUsers = function(){
    return userData.getUsers()
}

exports.getUser = function(id){
    return userData.getUser(id)
}