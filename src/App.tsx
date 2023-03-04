import React from 'react'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Editar from './components/Editar';
import Home from './components/Home'
import Produto from './components/Produto';
import './style/App.scss'

function App() {
 

  return (
    <div className='app' >
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/produto' element={<Produto />} />
      <Route path='/editar/:id' element={<Editar />} /> 
    </Routes>
  </Router>
    </div>
  )
}

export default App
