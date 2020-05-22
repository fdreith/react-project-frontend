import React from 'react'
import Task from './Task.js'

const AssignedTasks = props => {

  return (
    <div className="assignedTasks">
      <h6>Assigned Tasks:</h6>
      <ul>
        {props.assignedTasks && props.assignedTasks.map(task => <Task key={task.id} task={task} history={props.history} />)}
      </ul>
    </div>
  )
}

// const assignedTasks = sortByDate(tasks.filter(task => task.type === "assigned_task")
//   .filter(task => task.relationships.user.data.id !== task.relationships.owner.data.id)
//   .filter(task => task.attributes.completed === false))


export default AssignedTasks

