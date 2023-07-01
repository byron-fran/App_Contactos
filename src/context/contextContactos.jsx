import { useContext, createContext, useReducer } from "react"
import { useNavigate } from "react-router-dom"
import { reducer } from "./reducer"
import {v4} from 'uuid'


export const context = createContext()


const contenido = {
  contacts : []
}
const ContextTarea = ({children}) => {

  const navigate = useNavigate()
  const [contacts, dipatch] = useReducer(reducer,contenido)

  const addContact = (contact)=>{
      
      dipatch({type: 'add', payload : {...contact, id : v4()}})
  }

  const deleteContact = (id)=>{
    
    
    dipatch({type : 'delete', payload : id})
  }
  const updateContact = (contact)=>{
    navigate('/form')
    dipatch({type : 'update', payload : contact})
    
  }
  return(
  <context.Provider value={{...contacts, addContact,deleteContact, updateContact}}>
        {children}
    </context.Provider>
  )
}

export default ContextTarea