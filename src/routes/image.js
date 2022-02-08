const express = require('express')
const axios = require('axios')
const router = express.Router()

const url = process.env.FLICKR_URL

router.get('/images', async (req, res) => {
    const { tags } = req.query
    const includeTags = tags ? `&tags=${tags}` : ''

    const { data } = await axios.get(`${url}${includeTags}`)

    if (!data.items) return res.status(404).json({ message: 'No Entry' })

    return res.status(200).json(data)
})

module.exports = router
