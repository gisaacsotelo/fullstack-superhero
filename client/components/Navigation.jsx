import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className='main-navigation'>
      <ul>
        <li><Link to='/heroes'>Home</Link></li>
        <li><Link to='/heroes/collection'>My Collection</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation