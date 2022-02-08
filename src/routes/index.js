const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    return res.status(303).send("Nothing's here, go to /image endpoint")
})

module.exports = router
