import React from 'react'

function Book(props) {
  // destructuring 

  console.log(`These are the proprs inside book: `, props)
  return (
    <div className="book">
      <h3>{props.bookInfo.b_title}</h3>
    </div>
  )
}

export default Book