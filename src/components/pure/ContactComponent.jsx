import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ContactModel } from '../models/ContactModel.class';

const ContactComponent = ({ contact, remove }) => {
    const [ccontact, setContact] = useState(contact);

    function changeActive() {
        const newContact = new ContactModel(!ccontact.active, ccontact.name);
        setContact(newContact);
    }

    return (
        <tr>
            <td>{ ccontact.name }</td>
            <td>{ ccontact.active ? <button onClick={changeActive} style={{backgroundColor:'green'}}>active</button> : <button onClick={changeActive} style={{backgroundColor:'red'}}>inactive</button> }</td>
            <td><button className='remove' onClick={ ()=>{ remove(ccontact)} }>Remove</button></td>
        </tr>
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(ContactModel).isRequired,
    remove : PropTypes.func.isRequired
};

export default ContactComponent;