import React, { Component } from 'react'
import Task from './Task.js'

class AssignedTasks extends Component {

  state = {
    assignedTasks: this.props.assignedTasks
  }

  replaceTask = (updatedTask) => {
    const tasks = this.state.assignedTasks.map(task => {
      if (task.attributes.id === updatedTask.attributes.id) {
        return updatedTask
      } else {
        return task
      }
    })
    this.sortPriority(tasks)
  }

  sortPriority = (tasks) => {
    const sortedTasks = tasks.sort(function (a, b) {
      const aPriority = a.priority ? a.priority : 0
      const bPriority = b.priority ? b.priority : 0
      return bPriority - aPriority
    })
    this.setState({
      assignedTasks: sortedTasks
    })
  }


  render() {
    return (
      <div className="assignedTasks">
        <h6>Assigned Tasks:</h6>
        <ul>
          {this.state.assignedTasks.map(task => <Task key={task.id} task={task} replaceTask={this.replaceTask} history={this.props.history} />)}
        </ul>
      </div>
    )
  }
}

export default AssignedTasks

