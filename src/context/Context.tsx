import React, { ReactNode } from 'react'
import { createContext, useContext } from "react";
import { api } from '../db/api';


interface TypeChildren{
    children: ReactNode
}

interface ConteType{
  loadPost: any
  estoq: any
}


export const ContextApi = createContext<ConteType | undefined>(undefined);
export function ContextApiProvider({children}: TypeChildren){
   
    const [estoq, setEstoq] = React.useState([])

    React.useEffect(()=>{
        loadPost()  
    },[])


    const loadPost = async () => {
        const result = await api.get('/post')
        setEstoq(result.data)
        
      }

     

    return(
        <ContextApi.Provider  value={{loadPost, estoq}}>
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