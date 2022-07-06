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
    // & LOGHERE----------------------------
    console.log(`useEffect running on mount only`)
    // get data from API
    getTheBooksAPI()
    // we recieve an array of all the books
      .then(booksArray => {
        // & LOGHERE----------------------------
        console.log(`Inside useEffect we got the books from our seeds:\n`,booksArray)
        // now we create an action to set those books on the store
        const setAllBooksAction = setAllBooksAC(booksArray)
        console.log(`Action recieved: `,setAllBooksAction)
        // now we dispatch the action so it gets stored on the store
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
      <div className="shelf">
        {state.map((book, index) => (
          <Book key={index} bookInfo={book} />
        ))}
      </div>
    </>
  )
}

export default Home