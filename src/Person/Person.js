import React from 'react'

import './Person.css'

const Person = (props) => {
    return ( 
            <div className='Person'>
            <p onClick = {props.handlerFromApp}> 
            This person component is named {props.name} and is {props.age} years old {props.children}
            </p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
        )
}

export default Person