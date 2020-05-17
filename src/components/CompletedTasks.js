import React from 'react'
import Task from './Task.js'

const CompletedTasks = props => {

  return (
    <div className="completedTasks">
      <h5>My Completed Tasks:</h5>
      <ul>
        {props.completedTasks && props.completedTasks.map(task => <Task key={task.id} task={task} history={props.history} completed={"Misson Accomplished! This task has been completed."}/>)}
      </ul>
    </div>
  )
}

export default CompletedTasks