// ^  MAIN ACTION CREATOR

// import functions from API
// import { getAllBooksAPI } from '../apis/booksAPI'

// VARIABLES
// (types from actions) used to trigger errors when
// mispelled on the switch statements

export const GIMMA_ALL_FRUITS = 'GIMMA_ALL_FRUITS'

// ACTION CREATOR FUNCTIONS

export function setAllBooksAC(allBooks) {
  return {
    type: GIMMA_ALL_FRUITS,
    payload: allBooks,
  }
}
