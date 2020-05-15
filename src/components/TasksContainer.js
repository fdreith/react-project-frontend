import React, { Component } from 'react'
import { connect } from 'react-redux';
import MyTasks from './MyTasks.js'
import TaskForm from './TaskForm.js'
import AssignedTasks from './AssignedTasks.js'
import EditTask from './EditTask.js'
import { Switch, Route } from 'react-router-dom'


class TasksContainer extends Component {

  render() {
    return (
      <div className="tasks-container">
        <Switch>
          <Route path="/tasks/assigned" component={AssignedTasks} />
          <Route exact path="/" component={MyTasks} />
          <Route path="/tasks/completed" component={TaskForm} />
          <Route path="/tasks/:id/edit" render={(routerProps) => {
            const tasks = [this.props.myTasks, this.props.assignedTasks].flat()
            const task = tasks.find(task => task.attributes.id === parseInt(routerProps.match.params.id))
            return <EditTask {...routerProps} task={task} />
          }} />}
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