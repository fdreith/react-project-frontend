import React from 'react'
import Task from './Task.js'


const MyTasks = props => {

  return (
    <div className="myTasks">
      <h6>{props.currentUser.attributes.name}'s Tasks:</h6>
      <ul>
        {props.myTasks && props.myTasks.map(task => <Task key={task.id} task={task} history={props.history} />)}
      </ul>
    </div>
  )
}

export default MyTasks

