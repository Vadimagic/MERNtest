const {Router} = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const router = Router()

// /api/auth
// /register
router.post('/register', async (request, response) => {
	// try {
	// 	const {email, password} = request.body
	// 	const candidate = await User.findOne({email})
	// 	if (candidate) {
	// 		return response.status(400).json({message: 'Such user already exists'})
	// 	}
	// 	const hashedPassword = await bcrypt.hash(password, 12)
	// 	const user = new User({email, password: hashedPassword})
	// 	await user.save()
	// 	response.status(201).json({message: 'User created'})
	// } catch (e) {
	// 	response.status(500).json({message: 'Error, please try again!'})	
	// }
})
// /login
router.post('/login', async (request, response) => {

})

module.exports = router