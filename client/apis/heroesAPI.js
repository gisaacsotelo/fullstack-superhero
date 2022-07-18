//  ^ HEROES API (DATA ROUTES)
// Import superagent: used to make requests for data
import request from 'superagent'

const baseURLAPI = 'https://akabab.github.io/superhero-api/api'

//~getAllHeroesExtAPI
export function getAllHeroesExtAPI() {
  // requesting ext API
  return request
    .get(`${baseURLAPI}/all.json`)
    .then((responseAllHeroes) => {
      // trim response to 15 heroes
      const reducedArrHeroes = responseAllHeroes.body.slice(130, 145)
      return reducedArrHeroes
    })
    .catch((err) => console.log(err))
}

// GET heroes
//  ~getHeroCollectionDB
export function getHeroCollectionDB() {
  return request
    .get('/heroesAPI/v1/heroes')
    .then((res) => {
      return res.body
    })
    .catch((err) => console.log(err))
}

// POST - add heroe
// ~addHeroDB
export function addHeroDB(hero) {
  // format data to add:
  // stringify images & powerstats
  hero.images = JSON.stringify(hero.images)
  hero.powerstats = JSON.stringify(hero.powerstats)
  return request
    .post('/heroesAPI/v1/heroes')
    .send(hero)
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.log(`ERROR ADDING: `, err)
      // err.status(500).send(err.message)
    })
}

// DELETE - hero from collection
// ~removeHeroAPI
export function removeHeroAPI(id) {
  return request
    .del(`/heroesAPI/v1/heroes/${id}`)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err)
    })
}