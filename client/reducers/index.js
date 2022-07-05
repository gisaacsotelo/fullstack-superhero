// ^ MAIN REDUCER

import { combineReducers } from 'redux'

// Import reducers
import booksReducer from './booksReducer'

export default combineReducers({
  books: booksReducer,
})
