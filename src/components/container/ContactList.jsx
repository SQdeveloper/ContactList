import React, { useState } from 'react';
import { ContactModel } from '../models/ContactModel.class';
import ContactComponent from '../pure/ContactComponent';
import Form from '../pure/Form';

const ContactList = () => {
    const contact  = new ContactModel(true, 'Jefferson');
    const contact1 = new ContactModel(false, 'Carlos');
    const contact2 = new ContactModel(true, 'Bandan');
    const [contacts, setContact] = useState([contact, contact1, contact2]);
    const [visibleForm, setVisibleForm] = useState(false);

    function addContact(contact) {
        const newContact = [...contacts];
        newContact.push(contact);
        setContact(newContact);
    }

    function openForm(value) {
        setVisibleForm(value);
    }

    function removeContact(contact) {
        const newContact = [...contacts];
        let index = newContact.indexOf(contact);
        newContact.splice(index, 1);
        setContact(newContact);
    }

    return (
        <div>
            <button className='add' onClick={()=>{openForm(true)}}>add Contact</button>
            <table>
                <thead>
                    <tr>
                        <th colSpan={3}><h1>Contact List</h1></th>
                    </tr>
                </thead>
                <tbody>
                    { contacts.map((contact, index) =>{
                        return(
                            <ContactComponent key={ index } contact={ contact } remove={ removeContact }/>
                        );
                    }) }
                </tbody>
            </table>
            {visibleForm ? <Form addContact={addContact} openForm={ openForm }/> : null}
        </div>
    );
};

export default ContactList;