// ^ MAIN REDUCER
import { combineReducers } from 'redux'

// Import reducers
import booksReducer from './booksReducer'
import heroesReducer from './heroesReducer'

export default combineReducers({
  books: booksReducer,
  heroes: heroesReducer,
})
