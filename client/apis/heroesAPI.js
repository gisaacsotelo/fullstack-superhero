//  ^ HEROES API (DATA ROUTES)
// Import superagent: used to make requests for data
import request from 'superagent'

const baseURLAPI = 'https://akabab.github.io/superhero-api/api'

//~getAllHeroesDBAPI
export function getAllHeroesExtAPI() {
  // requesting ext API
  return request
    .get(`${baseURLAPI}/all.json`)
    .then((responseAllHeroes) => {
      const sups = responseAllHeroes.body.slice(130, 145)
      return sups
    })
    .catch((err) => console.log(err))
}

// // THUNKS

// export function getAllHeroesThunk(){
//   return (dispatch) => {
//     dispatch(getAllHeroesDBAPI())

//   }
// }
