import React from 'react'
import './flight.css'
import { flight } from '../types/flight';
import { useDroppable } from '@dnd-kit/core';
import Task from './task/Task';

type FlightItemProps = {
  flight: flight;
}

function Flight({flight}: FlightItemProps) {
  const {setNodeRef} = useDroppable({
    id: flight.flightNumber
  });

  return (
    <div className='flight'>
      <div className='flightNumber'>
        {flight.flightNumber}
      </div>
      <div className='tasks'>
        {flight.tasks.map((task) => (
          <div ref={setNodeRef} key={task.id} >
            {task.team === 'Tasks' ?
            <Task task={task}/>
            :
            <></>
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default Flight