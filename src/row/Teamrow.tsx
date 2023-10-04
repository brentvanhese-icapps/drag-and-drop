import React from 'react'
import './row.css'
import { useDroppable } from '@dnd-kit/core'
import { task } from '../types/task';
import Task from '../flight/task/Task';

type TeamRowItemProps = {
    teamName: string;
    tasks: task[];
  }

function TeamRow({teamName, tasks}: TeamRowItemProps) {
  const {setNodeRef} = useDroppable({
    id: teamName
  });

  return (
    <div ref={setNodeRef} className='row'>
        <div className='name'>{teamName}</div>
        <div className='flights'>
          <div className='sort-flights'>
            {tasks.map((task) => (
                    <Task task={task} key={task.id}/>
            ))}
          </div>
        </div>
    </div>
  )
}

export default TeamRow 