import React, { useState } from 'react';
import { ContactModel } from '../models/ContactModel';
import PropTypes from 'prop-types';

const Contact = ({contact}) => {    
    const [ ccontact, setContact ] = useState(contact);
    
    const changeActive = ()=>{
        const newContact = new ContactModel(!ccontact.active, ccontact.name);
        setContact(newContact);
    }

    return (
        <>
            <td>{ ccontact.name }</td>
            <td>{ ccontact.active ? <button onClick={changeActive} style={{backgroundColor: 'green'}}>activo</button> : <button onClick={changeActive} style={{backgroundColor: 'red'}}>inactivo</button> }</td>
        </>
    );
};

Contact.propTypes = {
    contact: PropTypes.instanceOf(ContactModel)
}

export default Contact;