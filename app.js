const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

const PORT = config.get('port') || 4320

async function start() {
	try {
		await mongoose.connect(config.get('mongoUrl'), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		})
		app.listen(PORT, () => console.log(`App has been started on ${PORT}...`))
	} catch (e) {
		console.log('Server Error', e.message)
		process.exit(1)
	}
}

start()