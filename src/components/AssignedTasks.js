import React from 'react'
import Task from './Task.js'

const AssignedTasks = props => {

  return (
    <div className="assignedTasks">
      <h5>My Assigned Tasks:</h5>
      <ul>
        {props.assignedTasks && props.assignedTasks.map(task => <Task key={task.id} task={task} history={props.history}/>)}
      </ul>
    </div>
  )
}

export default AssignedTasks

