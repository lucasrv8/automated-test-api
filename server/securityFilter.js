require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

async function verifyJWT(req, res, next) {
    // Checks if the token was sent in the request header
    const token = req.headers['x-access-token'];
    if (!token) return { statusCode: 401, message: 'Bad request: Access token not provided' }
    
    // Check token integrity
    return jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err){
            return { statusCode: 401, message: 'Unauthorized: Token expired' }
        }else{
            return { statusCode: 200, message: 'Success' }
        }
    });
}

exports.filterAcess = async function(req, res, next){
    const validadeAccess = await verifyJWT(req)
    if(validadeAccess.statusCode == 200){
        next()
    }else{
        return res.status(validadeAccess.statusCode).json(validadeAccess)
    }
}