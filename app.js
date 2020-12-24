const express = require('express')
const config = require('config')

const app = express()

const PORT = config.get('port') || 4320

app.listen(PORT, () => console.log(`App has been started on ${PORT}...`))