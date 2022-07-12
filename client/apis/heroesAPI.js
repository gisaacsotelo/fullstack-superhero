//  ^ HEROES API (DATA ROUTES)
// Import superagent: used to make requests for data
import request from 'superagent'

//~getAllHeroesDBAPI
export function getAllHeroesDBAPI() {
  // requestion through our route
  return request.get('/heroesAPI/v1/heroes').then((response) => {
    return response.body
  })
}
