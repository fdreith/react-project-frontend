import React, { Component } from 'react'
import { connect } from 'react-redux';
import MyTasks from '../components/MyTasks.js'
import TaskForm from './TaskForm.js'
import AssignedTasks from '../components/AssignedTasks.js'
import { Switch, Route } from 'react-router-dom'


class TasksContainer extends Component {

  render() {
    return (
      <div className="tasks-container">
        <Switch>
          <Route path="/tasks/assigned" component={AssignedTasks} />
          <Route exact path="/tasks" component={MyTasks} />
          <Route path="/tasks/completed" component={TaskForm} />
        </Switch>
        <hr />
        <TaskForm />

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