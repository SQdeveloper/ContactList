import React, { useRef } from 'react';
import { ContactModel } from '../models/ContactModel';

const Form = ({updateData}) => {
    const nameRef = useRef();
    const activeRef = useRef();

    function sendUpdate(e) {
        e.preventDefault();
        const newContact  = new ContactModel();
        newContact.name   = nameRef.current.value;
        if(activeRef.current.value === 'active') {
            newContact.active = true;
        }else {
            newContact.active = false;
        }
        updateData(newContact);
    }

    return (
        <form method='POST' action=''>
            <label>Name: </label>
            <input ref={nameRef} id='name' name='name' />
            <select ref={activeRef}>
                <option>active</option>
                <option>inactive</option>
            </select>
            <button onClick={sendUpdate} style={{backgroundColor:'yellow', color:'black'}}type='submit'>Save</button>
        </form>
    );
};

export default Form;