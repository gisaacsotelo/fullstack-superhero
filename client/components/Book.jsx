import React from 'react'

// destructuring props
function Book({ bookInfo }) {
  // destructuring bookInfo
  const { b_title, b_author, b_cathegory, is_out } = bookInfo

  return (
    <div className="book">
      <h3>{b_title}</h3>
      <section>
        <span className='bold'>Author:</span> {b_author} <br/>
        <span className='bold'>Cathegory:</span> {b_cathegory} <br/>
        <span className='bold'>Available:</span> {is_out ? 'No' : 'Yes'}<br />
      </section>
    </div>
  )
}

export default Book