import React, { useState } from 'react';
import Contact from '../pure/Contact';
import { ContactModel } from '../models/ContactModel';
import Form from '../pure/Form';

const ContactList = () => {
    const contactModel = new ContactModel(true, 'Jefferson');
    const contactModel1 = new ContactModel(true, 'Jose');
    const [ contacts, setContacts ] = useState([contactModel, contactModel1]);
    const [ openForm, setOpenform ] = useState(false);

    function addContact(newContact) {
        const newContacts = [...contacts];
        newContacts.push(newContact);
        setContacts(newContacts);
        setOpenform(false);
        console.log(contacts);
    }

    function removeContact(valueContact) {
        const now = [...contacts];
        let index = now.indexOf(valueContact);
        now.splice(index, 1);
        setContacts(now);
    }

    function showForm() {
        setOpenform(true);
    }

    return (
        <div className='list'>
            <button onClick={showForm} className='button-add'>add</button>
            <table>
                <thead>
                    <tr>
                        <th colSpan={3}><h1>Contact List</h1></th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index)=>(
                        <Contact 
                        key={index}
                        contact={contact} 
                        removeContact={removeContact}>
                        </Contact>
                    ))}
                </tbody>
            </table>
            {openForm ? <Form updateData={addContact}/> : null}
        </div>
    );
};

export default ContactList;