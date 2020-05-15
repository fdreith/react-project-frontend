import React from 'react'
import Task from './Task.js'
import { connect } from 'react-redux';


const MyTasks = props => {

  return (
    <div className="myTasks">
      <h5>{props.currentUser.attributes.name}'s
  Tasks:</h5>
      <ul>
        {props.myTasks && props.myTasks.map(task => <Task key={task.id} task={task} />)}
      </ul>
    </div>
  )
}
const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser,
    myTasks: state.tasks.myTasks
  })
}


export default connect(mapStateToProps)(MyTasks)