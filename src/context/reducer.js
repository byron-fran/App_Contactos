export const reducer =({contacts},action)=>{
    switch(action.type){
        case 'add':
            //Agrega nuevo objeto
            return {contacts: [...contacts, action.payload]}
        case 'delete':
            //elimina el objeto filtrado
            return {contacts : contacts.filter(contact => contact.id !== action.payload)} //retorna solo los ids que no coinciden
        case 'update':
         // verifica si existe el objeto para editarlo   
        const updateContact = action.payload  
        const contactsUpdate = contacts.map(contact=>{
            if(contact.id === updateContact.id){
                contact.nombre = updateContact.nombre;
                contact.email = updateContact.email;
                contact.numero = updateContact.numero
            }
            return contact
        })
        return {contacts : contactsUpdate}
    }
};
