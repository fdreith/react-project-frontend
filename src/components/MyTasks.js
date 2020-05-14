import React from 'react'
import Task from './Task.js'
import { connect } from 'react-redux';

const MyTasks = props => {
  return (
    <div>
      <div>
        {props.myTasks.map(task => <Task key={task.id} task={task} />)}
      </div>

      <div>
        <h4>My Assigned Tasks:</h4>
        {props.assignedTasks.map(task => <Task key={task.id} task={task} />)}
      </div>

    </div>
  )

}

const mapStateToProps = state => {
  return ({
    myTasks: state.tasks.myTasks,
    assignedTasks: state.tasks.assignedTasks
  })
}

export default connect(mapStateToProps)(MyTasks)