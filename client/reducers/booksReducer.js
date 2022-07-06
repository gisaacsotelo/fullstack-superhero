// ^ BOOKS REDUCER
import { GIMMA_ALL_FRUITS } from '../actions'

const initialState = [
  // {
  //   b_id: 1,
  //   b_title: 'Salpicon de Espaldilla',
  //   b_author: 'Guillermo Herdez',
  //   b_cathegory: 'Cooking',
  //   is_out: false,
  // },
  // {
  //   b_id: 2,
  //   b_title: 'Cosmos',
  //   b_author: 'Aquiles Baeste Riaton',
  //   b_cathegory: 'Science',
  //   is_out: false,
  // },
]

function booksReducer(state = initialState, action) {
  // destructuring action
  const { type, payload } = action

  switch (type) {
    case GIMMA_ALL_FRUITS: {
      return payload
    }
    default: {
      // we do nothing return state unchanged
      return state
    }
  }
}

export default booksReducer
