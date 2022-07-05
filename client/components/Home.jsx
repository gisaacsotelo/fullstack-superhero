import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

// import components
import Book from './Book'

// import functions
import { getTheBooks } from '../apis/booksAPI'


function Home() {
  // Accessing the books state from store
  const state = useSelector(globalState => {
    return globalState.books
  })

  useEffect(() => {
    // get data from API
    getTheBooks()
      .then(
        // we recieved all the books from database
        // create an action?
        // dispatch it?
      )
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