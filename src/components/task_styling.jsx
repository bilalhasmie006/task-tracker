import React from 'react'
import {FaTimes} from 'react-icons/fa'
const task = ({taskttt,day,onDelete,onToggle}) => {
  return (
  
    <div 
    className={`task ${taskttt.reminder ? 
    '' : 'reminder'}`} 
    onDoubleClick={()=>onToggle(taskttt.id)}>
      <h3>{taskttt.text} <FaTimes style={{color:"orange" , cursor:"pointer"}} onClick={()=>onDelete(taskttt.id)} /></h3>
      <p>{day}</p>
      <p>{taskttt.reminder?"true":"false"}</p>
    </div>
  
  )
}

export default task
