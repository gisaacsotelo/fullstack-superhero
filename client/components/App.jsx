import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Import view Components
import Home from './Home'
import Heroes from './Heroes'
import HeroProfile from './HeroProfile'
import HeroesCollection from './HeroesCollection'
// Import Components
import Header from './Header'
import Footer from './Footer'

function App () {
  return (
    <Router>
      <Header />
        <div className="main">
          <Routes>
            <Route path='/' element={<Heroes />}/>
            <Route path='/heroes' element={<Heroes />} />
            <Route path='/heroes/collection' element={<HeroesCollection />} />
            <Route path='/heroes/:profile' element={<HeroProfile />} />
          </Routes>
        </div>
      <Footer />
    </Router>
  )
}

export default App
