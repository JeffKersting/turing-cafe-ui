import React, { Component } from 'react';

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: ''
    }
  }

  handleChange(event) {
    switch(event.target.id) {
      case 'name':
        console.log('Name form')
        break
      case 'date':
          console.log('Date')
          break
      case 'time':
          console.log('Time')
          break
      case 'guests':
          console.log('Guests')
          break
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' id='name' placeholder='Name' onChange={this.handleChange}/>
        <input type='date' id='date' placeholder='Date (mm/dd)' onChange={this.handleChange}/>
        <input type='time' id='time' placeholder='Time' onChange={this.handleChange}/>
        <input type='number' id='time' placeholder='Number of Guests' onChange={this.handleChange}/>
      </form>
    )
  }
}

export default ReservationForm;
