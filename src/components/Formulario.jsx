import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { context } from '../context/contextContactos'
import Alerta from './Alerta'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {AiOutlineContainer} from 'react-icons/ai'
const Formulario = () => {

    const navigate = useNavigate()
    const params = useParams()
    const [alerta, setAlerta]= useState(false)
    const {addContact,  updateContact, contacts} = useContext(context)
    //inicializa el objeto
    const [contact, setContacts] = useState({
        id: '',
        nombre : '',
        numero : '',
        email : ''
    })
    //crea un objeto apartir de los inputs
    const handleAdd = (e)=>{
      
       setContacts({...contact,[e.target.name] : e.target.value})
       
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
      const {nombre, email, numero} = contact
      //verifica si hay campos vacios
      if(nombre.length !==0 || email.length !== 0 || numero.length !==0){
        setAlerta(false)
        if(contact.id){ //verifica si existe el id
            updateContact(contact)
        
        }
        else{
            addContact(contact);
            const formulario = document.querySelector('form');
            formulario.reset()
        }
  
        navigate('/list')
        
      } 
      setAlerta(true)
      
    }
    useEffect(()=>{
        // retorna el nuevo array con el objeto modificado
        const contactExist = contacts.find(contact=> contact.id === params.id)
        if(contactExist){
            setContacts(contactExist)   
        }
        
    },[params.id, contacts])
  
  return (
    <>  
        {alerta && <Alerta/>}
        <main>

            <form onSubmit={handleSubmit}>
                
                <Link className='barra' to='/list'><AiOutlineContainer/></Link>
                 <h1>Agregar Contacto</h1>
                <div>
                    <input name='nombre' value={contact.nombre} placeholder='Nombre' type='text' onChange={handleAdd}/>
                </div>
                <div>
                    <input name='email' value={contact.email} placeholder='email' type='email' onChange={handleAdd}/>
                </div> 
                <div>
                    <input name='numero' value={contact.numero} placeholder='numero' type='number' onChange={handleAdd}/>
                </div> 
                <div>
                    <button type='submit'>{contact.id? 'Editar' : 'Agregar'}</button>
                </div>
            </form>
        </main>
    </>
  )
}

export default Formulario