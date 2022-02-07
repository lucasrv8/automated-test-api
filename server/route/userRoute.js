const express = require('express')
const router = express.Router()

// Importe security filter
const securityFilter = require('../securityFilter')

// Import user service
const userService = require('../service/userService')

// Get all users: GET
router.get('/user', securityFilter.filterAcess, async function(req, res){
    const users = await userService.getUsers()
    res.json(users)
})

// Get specific user
router.get('/user/:id', securityFilter.filterAcess, async function(req, res){
    const user = await userService.getUser(req.params.id)
    res.status(user.statusCode).json(user)
})

// Create new user: POST
router.post('/user', securityFilter.filterAcess, async function(req, res){})

// Edit user: PUT
router.put('/user/:id', securityFilter.filterAcess, async function(req, res){})

// Delete user: DELETE
router.delete('/user/:id', securityFilter.filterAcess, async function(req, res){})


module.exports = router