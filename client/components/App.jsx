import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import Components
import Header from './Header'
import Footer from './Footer'

function App () {
  return (
    <Router>
      <Header />
        <Routes>
          <Route />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
