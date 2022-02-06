const express = require('express')
const router = express.Router()

// Import authorization service
const authService = require('../service/authService')

router.post('/login', async function(req, res, next){
    const validade = await authService.validateUser(req.body.username, req.body.password)

    res.status(validade.statusCode).json(validade)
})


module.exports = router