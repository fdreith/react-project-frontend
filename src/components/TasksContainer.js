import React, { Component } from 'react'
import { connect } from 'react-redux';
import MyTasks from './MyTasks.js'
import TaskForm from './TaskForm.js'
import AssignedTasks from './AssignedTasks.js'
import CompletedTasks from './CompletedTasks.js'
import EditTask from './EditTask.js'
import { Switch, Route } from 'react-router-dom'

class TasksContainer extends Component {

  render() {
    return (
      <div className="tasks-container">
        <Switch>
          <Route
            path="/tasks/assigned"
            render={(routerProps) => <AssignedTasks {...routerProps} assignedTasks={this.props.assignedTasks} />}
          />
          <Route
            exact path="/"
            render={(routerProps) => <MyTasks {...routerProps} myTasks={this.props.myTasks} currentUser={this.props.currentUser} />}
          />
          <Route
            path="/tasks/completed"
            render={(routerProps) => <CompletedTasks {...routerProps} completedTasks={this.props.completedTasks} />}
          />
          <Route
            path="/tasks/:id/edit"
            render={(routerProps) => {
              const tasks = [this.props.myTasks, this.props.assignedTasks].flat()
              const task = tasks.find(task => task.attributes.id === parseInt(routerProps.match.params.id))
              return <EditTask {...routerProps} task={task}
              />
            }}
          />}
        </Switch>
        <hr />
        <TaskForm />

      </div >
    )
  }
}

const sortByDate = (tasks) => {
  return tasks.sort(function (a, b) {
    const dueDateA = a.attributes.due_date
    const dueDateB = b.attributes.due_date
    if (dueDateA < dueDateB) {
      return -1
    }
    if (dueDateA > dueDateB) {
      return 1
    }
    return 0
  })
}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser,
    users: state.users,
    tasks: state.tasks,
    myTasks: sortByDate(state.tasks.myTasks),
    assignedTasks: sortByDate(state.tasks.assignedTasks),
    completedTasks: sortByDate(state.tasks.completedTasks)

  })
}

export default connect(mapStateToProps)(TasksContainer)