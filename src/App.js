import React, { Component } from 'react';
import Person from './Person/Person'
import Radium from 'radium'
import './App.css';
import { StyleRoot } from 'radium/lib';

class App extends Component {
 state = {
   persons: [
     {id:'abc', name: 'Zachary', age: 32},
     {id:'def', name: 'Atticus', age: 6},
     {id:'hij', name: 'Jessica', age: 38}
   ],
   displayPerson: false
 }

  changeNameHandler = (e, id) => {
    //finds index of component that is going to be mutated and stores in in presonIndex
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    //unpacks what is stored at the index of component to be mutated and stores it to person
    const person = {
      ...this.state.persons[personIndex]
    }

    //sets person.name to what is in the in targeted input element
    person.name = e.target.name.value
    
    // created a new array from the state and sets the desired index to what has changed
    const persons = [...this.state.persons]
    persons[personIndex] = person

    //updates state 
    this.setState({
      persons: person
    })
  }

  // changeNameOllieHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       {name: 'Zachary', age: 32},
  //       {name: newName, age: 4},
  //       {name: 'Jessica', age: 32}
  //     ]
  //   })
  // }

  togglePersonsHandler = () => {
    const doesShow = this.state.displayPerson;
    this.setState({displayPerson: !doesShow})
  } 

    deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons]
      persons.splice(personIndex, 1)
      this.setState({persons})
    }

  render() {
    const style = {
      backgroundColor: "green",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null

    if(this.state.displayPerson){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return(
              <Person 
                click = {() => this.deletePersonHandler(index)}  
                name={person.name} 
                age={person.age} 
                key={person.id}
                changed={(e) => this.changeNameHandler(e, person.id)}
                />
            )
          })}
        </div>
      )
      style.backgroundColor = "red"
      style[':hover'] = {
          backgroundColor: 'pink',
          color: 'black'
        }
    }

    const classes = []
    if(this.state.persons.length <= 2) {
      classes.push('red')
    }

    if(this.state.persons.length <= 1){
      classes.push( 'bold')
    }


    return (
      <StyleRoot>
      <div className="App">
        <h1>This is some more text!!!</h1>
        <p className={classes.join(' ')}>text</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle Persons</button>
        {persons}
      </div>
      </StyleRoot>
    );
    
    // return React.createElement('div', {className: "app"}, 
      // React.createElement('h1', null, 'some children'))
  }

}

export default Radium(App);
