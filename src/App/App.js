import React, { Component } from 'react';
import './App.css';
import fetchRequests from './fetch-requests'
import ReservationCard from './reservation-display'
import ReservationForm from './reservation-form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    }
  }

  componentDidMount() {
    fetchRequests.getReservations()
      .then(response => this.setState({reservations: response}) )
  }

  handleReservation(newReservation) {
    this.setState( {reservations: [...this.state.reservations, newReservation]} )
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm handleReservation={event => this.handleReservation(event)}/>
        </div>
        <div className='resy-container'>
          {this.state.reservations.map(reservation => ReservationCard(reservation))}
        </div>
      </div>
    )
  }
}

export default App;
