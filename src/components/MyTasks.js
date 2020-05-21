import React, { Component } from 'react'
import Task from './Task.js'
import Button from 'react-bootstrap/Button'


const MyTasks = (props) => {

  return (
    <div className="myTasks">
      <h6>{props.currentUser.attributes.name}'s Tasks:</h6>
      <ul>
        {props.myTasks && props.myTasks.map(task => {
          return (
            <div key={task.id}>
              <Task task={task} history={props.history} />

            </div>)
        })}
      </ul>
    </div>
  )

}


export default MyTasks

