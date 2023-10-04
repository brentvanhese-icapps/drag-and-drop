import React from 'react'
import './row.css'
import { useDroppable } from '@dnd-kit/core'
import { SortableContext } from '@dnd-kit/sortable';
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
    <div className='row'>
        <div className='name'>{teamName}</div>
        <div className='flights'>
        <SortableContext items={[]}>
            <div ref={setNodeRef} className='sort-flights'>
              {tasks.map((task) => (
                    <Task task={task} key={task.id}/>
              ))}
            </div>
        </SortableContext>
        </div>
    </div>
  )
}

export default TeamRow 