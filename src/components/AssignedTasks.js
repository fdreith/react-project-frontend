import React from 'react'
import Task from './Task.js'
import { connect } from 'react-redux';


const AssignedTasks = props => {

  return (
    <div className="assignedTasks">
      <h5>My Assigned Tasks:</h5>
      <ul>
        {props.assignedTasks.map(task => <Task key={task.id} task={task} />)}
      </ul>
    </div>
  )
}
const mapStateToProps = state => {
  return ({
    assignedTasks: state.tasks.assignedTasks
  })
}


export default connect(mapStateToProps)(AssignedTasks)