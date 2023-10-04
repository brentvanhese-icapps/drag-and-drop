import React, { useState } from 'react'
import TeamRow from '../row/Teamrow'
import TaskRow from '../row/TaskRow'
import { DndContext, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core'
import { INITIAL_FLIGHTS } from '../data'
import { task } from '../types/task'
import { restrictToWindowEdges } from '@dnd-kit/modifiers'

function Timeline() {
  const flights = INITIAL_FLIGHTS;
  const [tasks, setTasks] = useState<Array<task>>([]);

  const updateTimeline = () => {
    setTasks([]);
    flights.map((flight) => (
      flight.tasks.map((task) => (
        setTasks(tasks => [...tasks, task])
      ))
    ))
  }

  if (tasks.length === 0) updateTimeline();

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);

  const sensors = useSensors(
    mouseSensor,
    touchSensor
  );
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} modifiers={[restrictToWindowEdges]} onDragEnd={(e) => {
      const container = e.over?.id;
      let task: task = e.active.data.current?.task;
      if (container === "Team 1") {
        task.team = "Team 1";
        updateTimeline();
      }
      else if (container === "Team 2") {
        task.team = "Team 2";
        updateTimeline();
      }
      else if (container === "Team 3") {
        task.team = "Team 3";
        updateTimeline();
      }
      else {
        task.dragging = false;
        updateTimeline();
      }
    }} onDragStart={(e) => {
      const task: task = e.active.data.current?.task;
      task.dragging = true;
    }}>
      <TeamRow teamName={'Team 1'} tasks={tasks.filter((task) => task.team === "Team 1")}/>
      <TeamRow teamName={'Team 2'} tasks={tasks.filter((task) => task.team === "Team 2")}/>
      <TeamRow teamName={'Team 3'} tasks={tasks.filter((task) => task.team === "Team 3")}/>
      <TaskRow name={'Tasks'} flights={flights}/>
    </DndContext>
  )
}

export default Timeline