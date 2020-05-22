import React, { Component } from 'react'
import Task from './Task.js'


class MyTasks extends Component {

  state = {
    myTasks: this.props.myTasks
  }

  replaceTask = (updatedTask) => {
    const tasks = this.state.myTasks.map(task => {
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
      myTasks: sortedTasks
    })
  }

  render() {
    console.log(this.state.myTasks)
    return (
      < div className="myTasks" >
        <h6>{this.props.currentUser.attributes.name}'s Tasks:</h6>
        <ul>
          {this.props.myTasks && this.state.myTasks.map(task => {
            return (
              <div key={task.id}>
                <Task task={task} history={this.props.history} replaceTask={this.replaceTask} />
              </div>)
          })}
        </ul>
      </div >
    )
  }
}

export default MyTasks
