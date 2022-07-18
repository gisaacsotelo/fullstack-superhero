//  ^ HEROES REDUCER
import {
  GET_ALL_HEROES,
  HERO_LOAD_STARTED,
  HERO_LOAD_COMPLETED,
  HERO_LOAD_FAILED,
  ADD_HEROE,
  FETCH_ALL_HEROES,
} from '../actions'

const initialState = {
  loading: true,
  failed: false,
  heroes: { api: [], heroes: [] },
}

function heroesReducer(state = initialState, action) {
  // destructure action
  const { type, payload } = action

  switch (type) {
    case HERO_LOAD_STARTED: {
      return {
        loading: true,
        failed: false,
      }
    }
    case HERO_LOAD_FAILED: {
      return {
        loading: false,
        failed: true,
      }
    }
    case HERO_LOAD_COMPLETED: {
      // console.log(`inside AC - load completed:`, {
      //   loading: false,
      //   failed: false,
      //   heroes: payload,
      // })
      return {
        loading: false,
        failed: false,
        heroes: payload,
      }
    }
    case GET_ALL_HEROES: {
      return state
    }
    case FETCH_ALL_HEROES: {
      return state.map((element) => {
        element.collected = false
      })
    }
    case ADD_HEROE: {
      // const res = { ...state }
      // res.heroes.collection.push(payload)
      return state
    }
    default: {
      return state
    }
  }
}

export default heroesReducer
