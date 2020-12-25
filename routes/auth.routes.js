const {Router} = require('express')
const User = require('../models/User')
const router = Router()

// /api/auth
// /register
router.post('/register', async (request, response) => {
	try {
		const {email, password} = req.body
	} catch (e) {
		response.status(500).json({message: 'Error, please try again!'})	
	}
})
// /login
router.post('/login', async (request, response) => {

})

module.exports = router