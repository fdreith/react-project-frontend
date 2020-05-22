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

  render() {
    return (
      <div className="tasks-container">
        <Switch>
          <Route
            exact path="/tasks/my-tasks"
            render={(routerProps) => <MyTasks {...routerProps} myTasks={this.props.myTasks} currentUser={this.props.currentUser} />}
          />
          <Route
            path="/tasks/assigned"
            render={(routerProps) => <AssignedTasks {...routerProps} assignedTasks={this.props.assignedTasks} />}
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
    myTasks: state.tasks.myTasks,
    assignedTasks: state.tasks.assignedTasks,
    completedTasks: state.tasks.completedTasks
  })
}

export default connect(mapStateToProps)(TasksContainer)