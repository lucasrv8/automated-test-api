const userData = require('../data/userData')

exports.getUsers = function(){
    return userData.getUsers()
}

exports.getUser = async function(id){
    if(!isNaN(id)){
        const user = await userData.getUser(id)
        if(user.length > 0){
            return {statusCode: 200, message: 'Success', user: user[0]}
        }else{
            return {statusCode: 404, message: 'User not found', user: null}
        }
    }else{
        return {statusCode: 400, message: 'Id is not an integer'}
    }
}