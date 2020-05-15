import React, { Component } from 'react'
import { connect } from 'react-redux';
import MyTasks from '../components/MyTasks.js'
import TaskForm from './TaskForm.js'


class TasksContainer extends Component {

  render() {
    return (
      <div className="tasks-container">
        <MyTasks
          myTasks={this.props.myTasks} assignedTasks={this.props.assignedTasks} currentUser={this.props.currentUser}
        />
        <hr />
        <TaskForm
          users={this.props.users} currentUser={this.props.currentUser}
        />
      </div >
    )
  }
}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser,
    users: state.users,
    tasks: state.tasks,
    myTasks: state.tasks.myTasks,
    assignedTasks: state.tasks.assignedTasks

  })
}

export default connect(mapStateToProps)(TasksContainer)