import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import components
import Book from './Book'

// import functions
import { getTheBooksAPI } from '../apis/booksAPI'
import { setAllBooksAC } from '../actions' // gets it from index.js


function Home() {
  // Accessing the books state from store
  const state = useSelector(globalState => {
    return globalState.books
  })
  const dispatch = useDispatch()

  useEffect(() => {
    // get data from API
    getTheBooksAPI()
    // we recieve an array of all the books
      .then(booksArray => {
        // now we create an action to set those books on the store
        const setAllBooksAction = setAllBooksAC(booksArray)
        // now we dispatch the action
        dispatch(setAllBooksAction)
      })
      .catch(err => {
        console.log(`Mounting Error: `,err)
      })
  }, [])

  return (
    <>
      <h2>Welcome to the library</h2>
      <p>Check the books we currently have</p>
      {state.map((book, index) => (
        <Book key={index} bookInfo={book} />
      ))}
    </>
  )
}

export default Home