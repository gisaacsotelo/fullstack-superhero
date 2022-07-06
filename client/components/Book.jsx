import React from 'react'

// destructured bookInfo from props
function Book({ bookInfo }) {
  // destructuring bookinfo
  const { b_title, b_author, b_cathegory, is_out } = bookInfo

  return (
    <div className="book">
      <h3>{b_title}</h3>
      <p><span className='bold'>Author:</span> {b_author}</p>
      <p><span className='bold'>Cathegory:</span> {b_cathegory}</p>
      <p><span className='bold'>Available:</span> {is_out ? 'No' : 'Yes'}</p>

    </div>
  )
}

export default Book