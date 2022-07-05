import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Import view Components
import Home from './Home'
// Import Components
import Header from './Header'
import Footer from './Footer'

function App () {
  return (
    <Router>
      <Header />
        <div className="main">
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </div>
      <Footer />
    </Router>
  )
}

export default App
