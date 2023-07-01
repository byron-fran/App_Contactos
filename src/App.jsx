import { useState, useContext } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import ContextTarea from './context/contextContactos'
import './App.css'
import ListaContactos from './components/ListaContactos'
import Formulario from './components/Formulario'

function App() {


  return (
    <>
       <div className='container_total'>
       <ContextTarea>
        <Link to='/' className='titulo' ><h1>Lista de contactos</h1></Link>
          <Routes>
            <Route path='/' Component={ListaContactos}/>
            <Route path='/form' Component={Formulario}/>
            <Route path='/update/:id' Component={Formulario}/>
         
          </Routes>
        </ContextTarea>
       </div>
    </>
  )
}

export default App
