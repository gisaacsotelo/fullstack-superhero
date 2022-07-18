// ^ ROUTER FILE (for heroes api)
// Our only export is the router

const express = require('express')
const router = express.Router()

//Import db functions
const {
  getAllHeroesDB,
  addHeroToTheDB,
  deleteHeroDB,
} = require('../db/database')

// GET: /heroesAPI/v1/heroes
router.get('/', (req, res) => {
  getAllHeroesDB()
    .then((heroesArr) => {
      return res.json(heroesArr)
    })
    .catch((err) => res.status(500).json({ err: err.message }))
})

// POST: /heroesAPI/v1/heroes
router.post('/', (req, res) => {
  const newHero = req.body
  addHeroToTheDB(newHero)
    .then((response) => {
      return res.json(newHero)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

// DELETE: /heroesAPI/v1/heroes
router.delete('/:id', (req, res) => {
  const id = req.params.id
  deleteHeroDB(id)
    .then(response => {
      return response
    })
    .catch(err => res.status(500).send(err.message))
})

// export router
module.exports = router
