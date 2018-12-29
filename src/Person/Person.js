import React from 'react'

import './Person.css'

const Person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return ( 
        <div className='Person' style={style}>
            <p> 
            This person component is named {props.name} and is {props.age} years old
            </p>
            <input type='text' onChange={props.changed} value={props.name} /><br />
            <button onClick = {props.click}>Delete</button>
        </div>
        )
}

export default Radium(Person)