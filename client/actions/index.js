// ^  MAIN ACTION CREATOR
// import functions from API
import { getAllHeroesExtAPI } from '../apis/heroesAPI'

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
export const ADD_HEROES = 'ADD_HEROES'

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

// ~ addHeroesAC
export function addHeroesAC(heroes) {
  return {
    loading: true,
    failed: false,
    type: ADD_HEROES,
    payload: heroes,
  }
}

//*  THUNKS

// ~setAllHeroesThunk
export function setAllHeroesThunk() {

  // start loading
  // request heroes
  // when recieved: 

  return (dispatch) => {
    // tell we are loading
    dispatch(heroLoadingStartedAC())
    // get the heroes
    getAllHeroesExtAPI()
      .then((heroes) => {
        // fetching succeded
        const action = heroLoadingCompleteAC(heroes)
        dispatch(action)
      })
      .catch(() => {
        // fetching failed
        const action = heroLoadingFailedAC()
        dispatch(action)
      })
  }
}
