// ^ database file

const knex = require('knex')
const config = require('./knexfile').development
const connection = knex(config)

function getAllBooks(db = connection) {
  // selects all the info on books table
  return db('books')
}

module.exports = {
  getAllBooks,
}
