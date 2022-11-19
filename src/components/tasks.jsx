import React, { useState } from 'react'
import Task from './task_styling'

const Tasks = ({tasks , onDelete ,onToggle}) => {

 
  return (
    <div>
      {tasks.map((task)=>(
       <Task key={task.id} taskttt={task} day={task.day} onDelete={onDelete}  onToggle={onToggle} />
    
        ))}
    </div>
  )
}

export default Tasks
