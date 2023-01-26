import React from 'react';
import PropTypes from 'prop-types';
import { ContactModel } from '../models/ContactModel.class';

const ContactComponent = ({ contact, remove, changeActive }) => {
    return (
        <tr>
            <td>{ contact.name }</td>
            <td>{ contact.active ? <button onClick={()=> { changeActive(contact) }} style={{backgroundColor:'green'}}>active</button> : <button onClick={()=>{changeActive(contact)}} style={{backgroundColor:'red'}}>inactive</button> }</td>
            <td><button className='remove' onClick={ ()=>{ remove(contact)} }>Remove</button></td>
        </tr>
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(ContactModel).isRequired,
    remove : PropTypes.func.isRequired,
    changeActive : PropTypes.func.isRequired
};

export default ContactComponent;