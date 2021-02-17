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
        this.setState( {name : event.target.value} )
        if(this.state.time) console.log('test')
        break
      case 'date':
        this.setState( {date: event.target.value} )
        break
      case 'time':
        this.setState( {time: event.target.value} )
        break
      case 'guests':
        this.setState( {guests: event.target.value} )
        break
      default:
        return
    }
  }

  createReservationObj() {
    const splitDate = this.state.date.split('-')
    const formattedDate = `${splitDate[1]}/${splitDate[2]}`
    const reservation = {
      date: formattedDate,
      id: 10,
      name: this.state.name,
      number: this.state.guests,
      time: this.state.time
    }
    return reservation
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newReservation = this.createReservationObj()
    this.props.handleReservation(newReservation)

  }

  render() {
    const { name, date, time, guests} = this.state
    const enableSubmit = name.length > 0 && date.length > 0 && time.length > 0 && guests.length > 0
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' id='name' placeholder='Name' value={this.state.name} onChange={event => this.handleChange(event)}/>
        <input type='date' id='date' placeholder='Date (mm/dd)' value={this.state.date} onChange={event => this.handleChange(event)}/>
        <input type='time' id='time' placeholder='Time' value={this.state.time} onChange={event => this.handleChange(event)}/>
        <input type='number' id='guests' placeholder='Number of Guests' value={this.state.guests} onChange={event => this.handleChange(event)}/>
        <input type='submit' id='submit' value='Make Reservation' disabled={!enableSubmit}/>
      </form>
    )
  }
}

export default ReservationForm;
