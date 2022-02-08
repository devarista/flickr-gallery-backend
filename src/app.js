const express = require('express')
require('dotenv').config()
const cors = require('cors')
const indexRoute = require('./routes/index')
const imageRoute = require('./routes/image')

const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())

app.use(express.json())

app.use(indexRoute)
app.use('/image', imageRoute)

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
}

module.exports = app
