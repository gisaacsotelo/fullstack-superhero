import React from 'react'
import { useDispatch } from 'react-redux'
// import functions 
// (action creators)
import { donateBookAC } from '../actions'
// API functions
import { addBookAPI } from '../apis/booksAPI'

function AddBookForm() {
  const dispatch = useDispatch()

  // ~handleSubmit
  const handleSubmit = e => {
    e.preventDefault()
    const newBookTitle = e.target.bookTitle.value
    const newBookAuthor = e.target.bookAuthor.value
    const newBookCathegory = e.target.bookCathegory.value

    // create the object (newBook) I want to add
    const newBook = {
      title: newBookTitle,
      author: newBookAuthor,
      cathegory: newBookCathegory,
    }
    // Create action to donate the new book (add a book to the database)
    const action = donateBookAC(newBook)
    // dispatch action to the store
    dispatch(action)
    // send the new book to the database - dataroute API
    // todo: 
    /* 
    define data structure to send to the db
    check thunks and when to use it
     */
  }


  return (
    <form onSubmit={handleSubmit}>
      <h4>Donate a Book!</h4>
      <label htmlFor="bookTitle">
        Book Title:
        <input type="text" id='bookTitle' placeholder='Book Title'/>
      </label>
      <br />
      <label htmlFor="bookAuthor">
        Book Author:
        <input type="text" id='bookAuthor' placeholder='Book Author'/>
      </label>
      <br />
      <label htmlFor="bookCathegory">
        Book Cathegory:
        <input type="text" id='bookCathegory' placeholder='Book Cathegory'/>
      </label>
      <br />
      <button type='submit'>
        Donate!
      </button>
    </form>
  )
}

export default AddBookForm