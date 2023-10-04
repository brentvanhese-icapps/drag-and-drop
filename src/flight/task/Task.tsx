import React from 'react'
import { task } from '../../types/task'
import { CSS } from "@dnd-kit/utilities";
import './task.css'
import { useDraggable } from '@dnd-kit/core'

type TaskItemProps = {
    task: task
  }

function Task({task}: TaskItemProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform
    } = useDraggable({ id: task.id, data: {task} });
    
    const style = {
        transform: CSS.Translate.toString(transform),
    };

    if (task.team !== "Tasks") {
        return (
            <div className={task.dragging ? 'taskInTimeline' : 'task'}>{task.type}</div>
        )
    }
  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style} className={task.dragging ? 'taskInTimeline' : 'task'}>{task.type}</div>
  )
}

export default Task