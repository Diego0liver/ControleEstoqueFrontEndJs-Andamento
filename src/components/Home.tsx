import React from 'react'
import '../style/Tabela.scss'
import Filtro from './Filtro'
import { Link } from 'react-router-dom'
import {useForms } from '../context/Context'
import Tema from './Tema'


interface Typagen{
    id:number
    titulo: string
    categoria: string
    entrada: number
    saida: number
    total: number
    minimo: number
}

function Home(){
    const {estoq} = useForms()
    
  return (<>
   <Tema />
   <h1 style={{color:'#1D572E'}}>Controle de estoque</h1>
        <Filtro />
    <div className='tabela'>
        <table>
    <tr>
        <td>Produto</td>
        <td>Categoria</td>
        <td>Entrada</td>
        <td>Saida</td>
        <td>Total Estoq.</td>
        <td>Minimo Estoq.</td>
        <td>Editar</td>
    </tr>
   {estoq.map((posts: Typagen)=>{return(
 <tr key={posts.id}>
 <td>{posts.titulo}</td>
 <td>{posts.categoria}</td>
 <td>{posts.entrada}</td>
 <td>{posts.saida}</td>
 <td className={posts.minimo <= posts.total ? 'total' : "totalNegativo"}>{posts.total}</td>
 <td>{posts.minimo}</td> 
 <td><Link to={{ pathname: `/editar/${posts.id}` }} ><button>Editar</button></Link></td>
</tr> )})}   
</table>


    </div>
  </>)
}

export default Home
