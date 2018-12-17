import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
 state = {
   persons: [
     {name: 'Zachary', age: 32},
     {name: 'Atticus', age: 6},
     {name: 'Jessica', age: 38}
   ]
 }

  changeNameHandler = (newName) => {
   this.setState({  
      persons: [
        {name: newName, age: 32},
        {name: 'Oliver', age: 4},
        {name: 'Jessica', age: 38}
      ]  
    })
  }

  changeJessicaAgeHandler = () => {
    this.setState({
      persons: [
        {name: 'Zachary', age: 32},
        {name: 'Atticus', age: 6},
        {name: 'Jessica', age: 32}
      ]
    })
  }

  changeNameOllieHandler = (newName) => {
    this.setState({
      persons: [
        {name: 'Zachary', age: 32},
        {name: newName, age: 4},
        {name: 'Jessica', age: 32}
      ]
    })
  }

  nameChangedHandler = e => {
    this.setState({  
      persons: [
        {name: e.target.value, age: 32},
        {name: 'Oliver', age: 4},
        {name: 'Jessica', age: 38}
      ],
      disPlayPerson : false
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.disPlayPerson;
    this.setState({disPlayPerson: !doesShow})
  } 

  render() {
    const style = {
      backgroundColor: "#fff",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>This is some more text!!</h1>
        <p>text</p>
        {/* passing data with bind */}
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>
          Display Persons</button>
        {
        this.state.disPlayPerson?
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age= {this.state.persons[0].age}
            changed={this.nameChangedHandler}  />
          <Person 
            name={this.state.persons[1].name} 
            age = {this.state.persons[1].age}
            /* passing data with by making it a function */
            handlerFromApp = {() => this.changeNameOllieHandler('Ollie')} > 
            and My Hobbies are being cool 
          </Person>
          <Person 
            name={this.state.persons[2].name} 
            age = {this.state.persons[2].age}
            handlerFromApp = {this.changeJessicaAgeHandler} />
        </div>
        :
        null
      }
      </div>
    );
    // return React.createElement('div', {className: "app"}, 
      // React.createElement('h1', null, 'some children'))
  }
}

export default App;
