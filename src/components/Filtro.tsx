import React from 'react'
import '../style/Filtro.scss'
import { useNavigate } from 'react-router-dom'
import { useForms } from '../context/Context'


function Filtro() {
  const {busfilter, busfilterCat} = useForms()
  const nav = useNavigate()
 function add(){
  nav('/produto')
 }

function limpaFiltro(){
  nav('/')
}


  return (
    <>
    <button className='btn-add' onClick={add}>Adicionar novo Produto</button>
    <form className='form' >
        <div>
    <label>Produto: </label>
     <input placeholder="Buscar Produto" onChange={busfilter} type='text'></input>
     </div>

     <div>
     <label>Marca: </label>
<select value="Todos" name="cars" id="cars" form="carform" onChange={busfilterCat}>
  <option value="Fiat">Fiat</option>
  <option value="Vw">Vw</option>
  <option value="Chevrolet">Chevrolet</option>
  <option value="Audio">Audio</option>
  <option value="Renault">Renault</option>
  <option value="Outros">Outros</option>
  <option value="Todos">Escolha marca</option>
</select>
<button onClick={limpaFiltro} >Limpa Filtro</button>
</div>
    </form>
    </>
  )
}

export default Filtro