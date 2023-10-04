import React from 'react'
import './row.css'
import Flight from '../flight/Flight'
import { flight } from '../types/flight';

type TaskRowItemProps = {
    name: string;
    flights: flight[]
  }

function TaskRow({name, flights}: TaskRowItemProps) {
  return (
    <div className='row'>
        <div className='name'>{name}</div>
        <div className='flights'>
        <div className='sort-flights'>
          {flights.map((flight) => (
            <Flight flight={flight} key={flight.id}/>
          ))}
            </div>
        </div>
    </div>
  )
}

export default TaskRow