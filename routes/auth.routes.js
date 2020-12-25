const {Router} = require('express')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()

// /api/auth
// /register
router.post('/register', [
		check('email', 'Incorrect email').isEmail(),
		check('password', 'Min length 6 symbols').isLength({min: 6})
	], async (request, response) => {
	try {
		const errors = validationResult(request)
		if (errors.isEmpty()) {
			return response.status(400).json({
				errors: errors.array(),
				message: 'Incorrect data at registration'
			})
		}

		const {email, password} = request.body
		const candidate = await User.findOne({email})
		if (candidate) {
			return response.status(400).json({message: 'Such user already exists'})
		}
		const hashedPassword = await bcrypt.hash(password, 12)
		const user = new User({email, password: hashedPassword})
		await user.save()
		response.status(201).json({message: 'User created'})
	} catch (e) {
		response.status(500).json({message: 'Error, please try again!'})	
	}
})
// /login
router.post('/login', async (request, response) => {

})

module.exports = router