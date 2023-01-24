import React, { useRef } from 'react';
import { ContactModel } from '../models/ContactModel.class';

const Form = ({ addContact, openForm}) => {
    const nameRef   = useRef(); 
    const activeRef = useRef();

    function add(e) {
        e.preventDefault();
        const newContact  = new ContactModel();
        newContact.name   = nameRef.current.value;
        newContact.active = activeRef.current.value === 'active' ? true : false;
        addContact(newContact);//Agregamos el nuevo contacto
        openForm(false);//Quitamos visualmente el formulario
    }

    return (
        <form>
            <label>name: </label>
            <input ref={nameRef} name='name' id='name' />
            <select ref={activeRef}>
                <option>active</option>
                <option>inactive</option>
            </select>
            <button onClick={add} style={{background:'yellow', color:'black', marginLeft:'1em'}}>add</button>
        </form>
    );
};

export default Form;