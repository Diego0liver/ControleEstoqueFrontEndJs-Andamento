import React from 'react'
import Logo from '../../public/icon.png'
import '../style/Tema.scss'

function Tema() {
 
  return (
    <div className='Tema' >
   <img alt='logo' src={Logo}></img>
    <h1>Auto-Peça PeçaCar</h1>
    </div>
  )
}

export default Tema
