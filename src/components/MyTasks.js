import React from 'react'
import Task from './Task.js'
import { connect } from 'react-redux';

const MyTasks = props => {

  return (
    <div>
      <div>
        <h3>My Tasks:</h3>
        {props.myTasks.map(task => <Task task={task} />)}
      </div>

      <div>
        <h3>My Assigned Tasks:</h3>
        {props.assignedTasks.map(task => <Task task={task} />)}
      </div>

    </div>
  )

}

const mapStateToProps = state => {
  return ({
    tasks: state.tasks.myTasks,
    assignedTasks: state.tasks.assignedTasks
  })
}

export default connect(mapStateToProps)(MyTasks)