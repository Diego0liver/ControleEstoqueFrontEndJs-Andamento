import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import '../style/Produto.scss'
import { api } from '../db/api';
import Tema from './Tema';


function Editar() {
  let {id} = useParams()

  const [produto, setProduto] = useState('')
  const [marca, setMarca] = useState('')
  const [entrada, setEntrada] = useState<any>('')
  const [saida, setSaida] = useState<any>('')
  const [estoque, setEstoque] = useState<any>('')


  React.useEffect(()=>{
    api.get(`/post/${id}`)
    .then((response)=>{
      setProduto(response.data.titulo)
      setMarca(response.data.categoria)
      setEntrada(response.data.entrada)
      setSaida(response.data.saida)
      setEstoque(response.data.minimo)
    })
  },[id])


  function updatePost() {
    api.put(`/post/${id}`, {
      titulo: produto,
      categoria: marca,
      entrada: entrada,
      saida: saida,
      total: entrada - saida,
      minimo: estoque
      })
      .then((response) => {
      setProduto(response.data.titulo)
      setMarca(response.data.categoria)
      setEntrada(response.data.entrada)
      setSaida(response.data.saida)
      setEstoque(response.data.minimo)
      window.location.reload();
      });
  }
  

  const deletProduto = async ()=> {
    await api.delete(`/post/${id}`)
    window.location.reload();
  }


  return (
    <div className='produto'>
      <Tema />
        <h1 style={{color:'#1D572E'}}>Editar Produto</h1>
        <h3 style={{color:'#1D572E'}}>{produto} {marca}</h3>
        <form >
          <label>Entrada</label>
          <input value={entrada} onChange={(e)=> setEntrada(e.target.value)} type="number" ></input><br/>

          <label>Saida</label>
          <input value={saida} onChange={(e)=> setSaida(e.target.value)} type="number" ></input><br/>

          <Link to={{ pathname: '/' }} >
             <button onClick={updatePost} >Salvar</button></Link>
             <Link to={{ pathname: '/' }} >
              <button onClick={deletProduto} >Excluir Produto</button><br />
             <Link to={{ pathname: '/' }} ></Link>
             <button >Voltar</button></Link>
        </form>
        
      
        
    
    </div>
  )
}

export default Editar