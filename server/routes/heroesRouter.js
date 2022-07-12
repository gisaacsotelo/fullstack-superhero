// ^ ROUTER FILE (for heroes api)
// Our only export is the router

const express = require('express')
const router = express.Router()

//Import db functions
const { getAllHeroesDB } = require('../db/database')

// GET: /heroesAPI/v1/heroes
router.get('/', (req, res) => {
  getAllHeroesDB()
    .then((heroesArr) => {
      console.log(`Router getAllHeroesDB array: `, heroesArr)
      // console.log(`Router getAllHeroesDB res.json: `, res.json(heroesArr))
      return res.json(heroesArr)
    })
    .catch((err) => res.status(500).json({ err: err.message }))
})

// export router
module.exports = router
