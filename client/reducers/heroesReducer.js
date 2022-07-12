//  ^ HEROES REDUCER
import { GET_ALL_HEROES } from '../actions'

initialState = []

function heroesReducer(state = initialState, action) {
  // destructure action
  const { type, payload } = action

  switch(type){
    case GET_ALL_HEROES: {
      
      return state
    }
    default: {
      return state
    }
  }
}
