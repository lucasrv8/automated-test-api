const express = require('express')
const router = express.Router()
const userService = require('../service/userService')


// Objetenção de dados: GET
router.get('/user', async function(req, res){
    const users = await userService.getUsers()
    res.json(users)
})

router.get('/user/:id', async function(req, res){
    const user = await userService.getUser(req.params.id)
    res.json(user)
})

// Criação de dados: POST
router.post('/user', async function(req, res){})

// Ediçao de dados: PUT
router.put('/user/:id', async function(req, res){})

// Remoção de dados: DELETE
router.delete('/user/:id', async function(req, res){})


module.exports = router