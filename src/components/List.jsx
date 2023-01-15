import { Filter } from "./Filter"
export const ContactList = ({ contacts,changeFilter,filter, deleteContact } ) => {
   
    return (
        <>
            <h2>Contacts</h2>
            <Filter changeFilter={changeFilter} filter={filter} />
        <ul>
            {contacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} deleteContact={ deleteContact} />
    
            ))}
        </ul></>
    )
}

const ContactItem = ({ contact:{name, number, id}, deleteContact}) => {
    
    return (
        <>
            <div>{name }</div>
            <div>{number}</div>
            <button type="button" onClick={ ()=>deleteContact(id)}>Delete</button>
        </>
        
    )
}