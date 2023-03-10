import React, { ReactNode } from 'react'
import { createContext, useContext } from "react";
import { api } from '../db/api';


interface TypeChildren{
    children: ReactNode
}

interface ConteType{
  loadPost: ()=>void
  estoq:  Array<number>
  busfilter: (props: Target) => void;
  busfilterCat: (props: Target) => void;
}

interface Target {
  target: {
    value: string
  };
}

interface Flt {
  titulo: string
  categoria: string
}

export const ContextApi = createContext<ConteType | undefined>(undefined);
export function ContextApiProvider({children}: TypeChildren){
   
    const [estoq, setEstoq] = React.useState([])


      const busfilter =({target}: Target)=>{
        if(target.value === ''){
            loadPost() 
            return
        }
        const filt = estoq.filter((f: Flt)=>f.titulo.includes(target.value))
        setEstoq(filt)
       }
     
       const busfilterCat =({target}: Target)=>{
        const filt = estoq.filter((f: Flt)=>f.categoria.includes(target.value))
        setEstoq(filt)
       }
     

     

       const loadPost = async () => {
        const result = await api.get('/post')
        setEstoq(result.data)  
      }

      React.useEffect(()=>{
        loadPost()  
    },[])

    return(
        <ContextApi.Provider  value={{loadPost, estoq, busfilter, busfilterCat}}>
              {children}
        </ContextApi.Provider>)
}

export const useForms =()=>{
    const context = useContext(ContextApi)
    if(context === undefined){
        throw new Error('Error')
    }
    return context
}