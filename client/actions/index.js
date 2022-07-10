// ^  MAIN ACTION CREATOR

// import functions from API
// import { getAllBooksAPI } from '../apis/booksAPI'

// VARIABLES
// (types from actions) used to trigger errors when
// mispelled on the switch statements

export const GIMMA_ALL_FRUITS = 'GIMMA_ALL_FRUITS'
export const DONATE_BOOK = 'DONATE_BOOK'

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
