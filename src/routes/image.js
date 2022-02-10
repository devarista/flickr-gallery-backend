const express = require('express')
const axios = require('axios')
const router = express.Router()

const url = process.env.FLICKR_URL

router.get('/', async (req, res) => {
    const { tags, page = 1, limit = 6 } = req.query

    const includeTags = tags ? `&tags=${tags}` : ''
    const { data } = await axios.get(`${url}${includeTags}`)

    const maxPage = Math.ceil(+data.items.length / +limit)
    const currentPage = +page <= maxPage && +page > 0 ? +page : maxPage

    const startIndex = (currentPage - 1) * +limit
    const endIndex = +page * +limit

    const result = {
        meta: {
            page: currentPage,
            totalPage: maxPage,
            previous: currentPage > 1 ? currentPage - 1 : null,
            next: currentPage < maxPage ? currentPage + 1 : null,
            limit: +limit,
            itemsLength: data.items.length,
        },
        results: {
            ...data,
            items: data.items.slice(startIndex, endIndex),
        },
    }

    return res.status(200).json(result)
})

module.exports = router
