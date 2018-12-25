import React from 'react'

import './Person.css'

const Person = (props) => {
    return ( 
        <div className='Person'>
            <p> 
            This person component is named {props.name} and is {props.age} years old
            </p>
            <input type='text' onChange={props.changed} value={props.name} /><br />
            <button onClick = {props.click}>Delete</button>
        </div>
        )
}

export default Person