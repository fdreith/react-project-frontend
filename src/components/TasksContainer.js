import React, { Component } from 'react'
import { connect } from 'react-redux';
import MyTasks from './MyTasks.js'
import TaskForm from './TaskForm.js'
import AssignedTasks from './AssignedTasks.js'
import CompletedTasks from './CompletedTasks.js'
import EditTask from './EditTask.js'
import { Switch, Route } from 'react-router-dom'

class TasksContainer extends Component {

  componentDidMount() {
    this.props.history.push('/tasks/my-tasks')
  }

  filterMyTasks = (tasks) => {
    return tasks.filter(task => task.attributes.user.id === parseInt(this.props.currentUser.id))
      .filter(task => task.attributes.completed === false)
  }

  filterAssignedTasks = (tasks) => {
    return tasks.filter(task => task.attributes.user.id !== parseInt(this.props.currentUser.id))
      .filter(task => task.attributes.completed === false)
  }

  filterCompletedTasks = (tasks) => {
    return tasks.filter(task => task.attributes.completed === true)
      .filter(task => task.attributes.user.id === parseInt(this.props.currentUser.id))
  }

  render() {
    return (
      <div className="tasks-container">
        <Switch>
          <Route
            exact path="/tasks/my-tasks"
            render={(routerProps) => <MyTasks {...routerProps} myTasks={this.filterMyTasks(this.props.tasks)} key={this.filterMyTasks(this.props.tasks)} currentUser={this.props.currentUser} />}
          />
          <Route
            path="/tasks/assigned"
            render={(routerProps) => <AssignedTasks {...routerProps} assignedTasks={this.filterAssignedTasks(this.props.tasks)} key={this.filterAssignedTasks(this.props.tasks)} />}
          />
          <Route
            path="/tasks/completed"
            render={(routerProps) => <CompletedTasks {...routerProps} completedTasks={this.filterCompletedTasks(this.props.tasks)} key={this.filterCompletedTasks(this.props.tasks)} />}
          />
          <Route
            path="/tasks/:id/edit"
            render={(routerProps) => {
              const task = this.props.tasks.find(task => {
                return task.attributes.id === parseInt(routerProps.match.params.id)
              })
              return <EditTask {...routerProps} task={task} />
            }}
          />

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
    tasks: state.tasks
  })
}

export default connect(mapStateToProps)(TasksContainer)