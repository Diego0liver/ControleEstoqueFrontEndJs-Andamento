import React from 'react'
import '../style/Filtro.scss'
import { useNavigate } from 'react-router-dom'

function Filtro() {
  const nav = useNavigate()
 function add(){
  nav('/produto')
 }

  return (
    <>
    <button className='btn-add' onClick={add}>Adicionar novo Produto</button>
    <form className='form' >
        <div>
    <label>Produto:</label>
     <input type='text'></input>
     </div>

     <div>
     <label>Marca:</label>
<select name="cars" id="cars" form="carform">
  <option value="fiat">Fiat</option>
  <option value="vw">Vw</option>
  <option value="chevrolet">Chevrolet</option>
  <option value="audio">Audio</option>
  <option value="renault">Renault</option>
  <option value="outros">Outros</option>
</select>
</div>
    </form>
    </>
  )
}

export default Filtro