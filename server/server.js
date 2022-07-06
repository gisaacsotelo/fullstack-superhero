const express = require('express')
const path = require('path')

const booksRouter = require('./routes/booksRoutes')

const server = express()

// MIDDLEWARE

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/bookAPI/v1/books', booksRouter)

// This is the BrowserRouter config
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
