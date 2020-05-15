import React from 'react'
import Task from './Task.js'

const MyTasks = props => {

  return (
    <div>
      <div className="myTasks">
      <h5>{props.currentUser.attributes.name}'s
      Tasks:</h5>
        <ul>
          {props.myTasks.map(task => <Task key={task.id} task={task} />)}
        </ul>
      </div>
    <hr />
      <div className="assignedTasks">
        <h5>My Assigned Tasks:</h5>
        <ul>
          {props.assignedTasks.map(task => <Task key={task.id} task={task} />)}
        </ul>
      </div>
    </div>

  )

}

export default MyTasks