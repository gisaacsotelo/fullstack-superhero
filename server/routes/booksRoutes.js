//  ^ THIS IS A ROUTER FILE (for books)
//  Only export will be our router

const express = require('express')
const router = express.Router()

const { getAllBooks } = require('../db/database')

// Data route for: '/bookAPI/v1/books/'
router.get('/', (request, response) => {
  getAllBooks()
    .then((allBooksArray) => {
      response.json(allBooksArray)
    })
    .catch((err) => response.status(500).json({ err: err.message }))
})

// export router
module.exports = router
