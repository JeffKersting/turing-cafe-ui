import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <form>
            <input placeholder='Name' type='text'/>
            <input type='date' placeholder='mm/dd'/>
            <input type='time'/>
            <input type='number'placeholder='Number of guests'/>
            <button>Make Reservation</button>
          </form>
        </div>
        <div className='resy-container'>

        </div>
      </div>
    )
  }
}

export default App;
