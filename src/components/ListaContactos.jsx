import React from 'react'
import { Link} from 'react-router-dom'
import { useContext } from 'react'
import { context } from '../context/contextContactos'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import Header from './Header'


const ListaContactos = () => {

  const {contacts,deleteContact} = useContext(context)


  return (
    <>
      
      <div className='container'>
         <Header></Header>   
       <Link to='/form'> <p className='add_icon'><AiOutlineAppstoreAdd className='icon'/></p></Link>
        <div className='list-items'>
          {contacts.map(({nombre, id,email, numero }) =>(
            <div key={id} className='card'>
              <div className='info'>
                <h2>Nombre: {nombre}</h2>
                <p>Correo: {email}</p>
                <p>Numero: {numero}</p>
              </div>
              <div className='botones'>
                <button className='botonDelete' onClick={()=>deleteContact(id)}>Eliminar</button>
                <Link className='botonUpdate' to={`/update/${id}`}  >Editar</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ListaContactos