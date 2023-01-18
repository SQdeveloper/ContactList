import React from 'react';

const Form = () => {
    return (
        <form method='POST' action=''>
            <label>Name: </label>
            <input id='name' name='name' />
            <select>
                <option>active</option>
                <option>inactive</option>
            </select>
        </form>
    );
};

export default Form;