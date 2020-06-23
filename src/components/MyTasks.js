import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Task from './Task'


const MyTasks = (props) => {


  return (
    <div className="myTasks">
      <h6>{props.currentUser.attributes.name}'s Tasks:</h6>
      <Table className="table">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Due Date</th>
            {/* <th scope="col">OKR</th> */}
          </tr>
        </thead>
        <tbody >
          {props.myTasks.map(task => <Task key={task.id} task={task} history={props.history} />)}
        </tbody>
      </Table>
    </div >
  )


}



export default MyTasks
