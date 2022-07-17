// ^ ROUTER FILE (for heroes api)
// Our only export is the router

const express = require('express')
const router = express.Router()

//Import db functions
const { getAllHeroesDB, addHeroDB } = require('../db/database')

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
  addHeroDB(newHero)
    .then((response) => {
      console.log(`router response: `, response)
      return res.json(newHero)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

// export router
module.exports = router
