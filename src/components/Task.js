import React, { Component } from 'react'
import TaskInfo from './TaskInfo'
import { Link } from 'react-router-dom'

class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showComponent: false
    }
  }

  handleClick = event => {
    this.state.showComponent === false ?
      this.setState({
        showComponent: true
      })
      :
      this.setState({
        showComponent: false
      })
  }

  render() {
    return (
      <div>
        <li onClick={this.handleClick}>
          {this.props.task.attributes.content} - {this.props.task.attributes.due_date}
          {/* {this.props.task.attributes.content || "You have no tasks"} */}
          
        </li>
        {this.state.showComponent ?
          <TaskInfo task={this.props.task} /> : null
        }
      </div>
    )
  }
}

export default Task