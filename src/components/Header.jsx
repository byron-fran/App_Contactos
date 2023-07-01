import { useContext } from "react"
import { context } from "../context/contextContactos"

const Header = () => {

    const {contacts} = useContext(context)
  return (
    <>
      {contacts.length>=1? <h1>Lista de contactos</h1> : <h1>Aún no tienes contactos</h1>}
    </>
  )
}

export default Header