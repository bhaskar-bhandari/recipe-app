import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/home'
import Favorites from './pages/favorites/Favorites'
import Details from './pages/details/Details'

function App() {


  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/recipe-item/:id' element={<Details />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
