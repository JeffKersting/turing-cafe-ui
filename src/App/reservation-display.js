import React from 'react'

function ReservationCard(reservationData) {
  return (
    <span className="reservation-card" id={reservationData.id}>
      <h1 className="name">{reservationData.name}</h1>
      <h2 className="date">{reservationData.date}</h2>
      <h2 className="time">{reservationData.time}</h2>
    </span>
  )
}

export default ReservationCard;
