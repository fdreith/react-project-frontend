import React from 'react'
import Task from './Task.js'

const CompletedTasks = props => {

  return (
    <div className="completedTasks">
      <h6>My Completed Tasks:</h6>
      <ul>
        {props.completedTasks && props.completedTasks.map(task => <Task key={task.id} task={task} history={props.history} completed={"Misson Accomplished! This task has been completed."}/>)}
      </ul>
    </div>
  )
}


// const completedTasks = sortByDate(tasks.filter(task => task.attributes.completed === true)
//   .filter(task => task.type === "task"))

export default CompletedTasks