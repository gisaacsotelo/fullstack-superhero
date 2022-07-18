// ^  MAIN ACTION CREATOR
// import functions from API
import {
  getAllHeroesExtAPI,
  getHeroCollectionDB,
  addHeroDB,
} from '../apis/heroesAPI'

// VARIABLES
// (types from actions) used to trigger errors when
// mispelled on the switch statements

export const GIMMA_ALL_FRUITS = 'GIMMA_ALL_FRUITS'
export const DONATE_BOOK = 'DONATE_BOOK'
// heroes
export const GET_ALL_HEROES = 'GET_ALL_HEROES'
export const HERO_LOAD_STARTED = 'HERO_LOAD_STARTED'
export const HERO_LOAD_FAILED = 'HERO_LOAD_FAILED'
export const HERO_LOAD_COMPLETED = 'HERO_LOAD_COMPLETED'
export const ADD_HEROE = 'ADD_HEROE'
export const FETCH_ALL_HEROES = 'FETCH_ALL_HEROES'

// ACTION CREATOR FUNCTIONS

export function setAllBooksAC(allBooks) {
  return {
    type: GIMMA_ALL_FRUITS,
    payload: allBooks,
  }
}

export function donateBookAC(newBook) {
  return {
    type: DONATE_BOOK,
    payload: newBook,
  }
}

//  & --------------------
//  & HEROES ACTIONS
//  & --------------------

// ~getHeroesFromDbAC
export function getHeroesFromDbAC(allHeroes) {
  return {
    type: GET_ALL_HEROES,
    payload: allHeroes,
  }
}

// ~ addHeroesAC
export function addHeroeAC(heroe) {
  return {
    type: ADD_HEROE,
    payload: heroe,
  }
}

//* loading actions ---------

// ~ heroLoadingStarted
export function heroLoadingStartedAC() {
  return { type: HERO_LOAD_STARTED }
}
// ~ heroLoadingCompleteAC
export function heroLoadingCompleteAC(heroes) {
  return {
    type: HERO_LOAD_COMPLETED,
    payload: heroes,
  }
}
// ~ heroLoadingFailedAC
export function heroLoadingFailedAC() {
  return { type: HERO_LOAD_FAILED }
}
// * end loading actions -------


//*  THUNKS ------------------------------------------------------

// ~setAllHeroesThunk
export function setAllHeroesThunk() {
  return (dispatch) => {
    // tell we are loading
    dispatch(heroLoadingStartedAC())
    // get the heroes 2 promises
    Promise.all([getAllHeroesExtAPI(), getHeroCollectionDB()])
      .then((values) => {
        const responseExtApi = values[0]
        const responseDatabase = values[1]
        let apiHeroesFormatted = responseExtApi.map((hero) => {
          let res = {}
          res.api_id = hero.id
          res.name = hero.name
          res.powerstats = hero.powerstats
          res.publisher = hero.biography.publisher
          res.images = hero.images
          res.race = hero.appearance.race
          res.collected = false
          return res
        })
        let dbHeroesFormatted = responseDatabase.map((hero) => {
          let res = { ...hero }
          res.collected = true
          return res
        })
        const response = {
          api: apiHeroesFormatted,
          collection: dbHeroesFormatted,
        }
        // completed fetch
        dispatch(heroLoadingCompleteAC(response))
      })
      .catch((err) => console.log(err))
  }
}

// // ~addHeroThunk
// export function addHeroThunk(hero) {
//   return (dispatch) => {
//     addHeroDB(hero)
//     .then(res => {
//       console.log(`response adding hero: `,res)

//     })
//     .catch(err => {console.log(err)})
//   }
// }
