const express = require('express')
require('dotenv').config()
const indexRoute = require('./routes/index')
const imageRoute = require('./routes/image')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())

// router
app.use(indexRoute)
app.use(imageRoute)

app.listen(PORT, () => console.log(`Server run at ${PORT}`))

module.exports = app
