import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../style/Produto.scss'
import { api } from '../db/api';
import Tema from './Tema';



function Produto() {
  const nav = useNavigate()
  const [produto, setProduto] = useState<string>('')
  const [marca, setMarca] = useState('')
  const [entrada, setEntrada] = useState<any>(0 || '')
  const [saida, setSaida] = useState<any>(0 || '')
  const [estoque, setEstoque] = useState<any>(0 || '')


  function novoProduto(){
     api.post('/post',{
      titulo: produto,
      categoria: marca,
      entrada: entrada,
      saida: saida,
      total: entrada - saida,
      minimo: estoque
    }).then((nav('/') as any || window.location.reload() ))
   
}
  
 function voltar(){
    nav('/')
 }


  return (
    <div className='produto'>
      <Tema />
        <h1 style={{color:'#1D572E'}}>Novo Produto</h1>
        <form >
          <label>Produto</label>
          <input value={produto} onChange={(e)=> setProduto(e.target.value)} type='text' ></input><br/>

          <label>Marca</label>
          <select value={marca} onChange={(e)=> setMarca(e.target.value)} name="categoria" >
  <option value="Fiat">Fiat</option>
  <option value="Vw">Vw</option>
  <option value="Chevrolet">Chevrolet</option>
  <option value="Audio">Audio</option>
  <option value="Renault">Renault</option>
  <option value="outros">Outros</option>
</select><br/>

          <label>Entrada</label>
          <input value={entrada} onChange={(e)=> setEntrada(e.target.value)} type="number" ></input><br/>

          <label>Saida</label>
          <input value={saida} onChange={(e)=> setSaida(e.target.value)} type="number" ></input><br/>

          <label>Estoque min</label>
          <input value={estoque} onChange={(e)=> setEstoque(e.target.value)} type='number' ></input><br/>
          <button onClick={novoProduto} >Salvar</button>
          <button onClick={voltar}>Voltar</button>
        </form>
    </div>
  )
}

export default Produto