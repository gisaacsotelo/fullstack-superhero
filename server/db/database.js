// ^ DATABASE FILE

const knex = require('knex')
const config = require('./knexfile').development
const connection = knex(config)

// ~ getAllBooks
function getAllBooks(db = connection) {
  // selects all the info on books table
  return db('books')
}

// &  -----------------
// &  HEROES FUNCTIONS
// &  -----------------

// ~getAllHeroesDB
function getAllHeroesDB(db = connection) {
  // selects table heroes all data
  return db('heroes')
}

// ~addHeroDB
function addHeroDB(hero, db = connection) {
  return db('heroes').insert({ hero })
}

module.exports = {
  getAllBooks,
  getAllHeroesDB,
  addHeroDB,
}
