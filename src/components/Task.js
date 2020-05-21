import React, { Component } from 'react'
import TaskInfo from './TaskInfo'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import { updatePriority } from '../actions/tasks'

class Task extends Component {
  state = {
    showComponent: false,
    counter: this.props.task.priority || 0,
    task: this.props.task
  }

  handleClick = event => {
    this.setState({
      showComponent: !this.state.showComponent,
    })
  }

  handleButtonClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
    this.props.updatePriority(this.state)
  }

  renderTask = () => {
    if (this.props.completed) {
      return (
        <div>
          <li onClick={this.handleClick}>
            {this.props.task.attributes.content}
          </li>
          {this.state.showComponent &&
            <TaskInfo task={this.props.task} history={this.props.history} completed={this.props.completed} />
          }
        </div>
      )
    } else {
      return (
        <div>
          <Button onClick={() => this.handleButtonClick()}>{this.state.counter}</Button>
          <li onClick={this.handleClick}>
            {this.props.task.attributes.content} - by {displayDate(this.props.task.attributes.due_date)}
          </li>
          {this.state.showComponent &&
            <TaskInfo task={this.props.task} history={this.props.history} />
          }
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderTask()}
      </div>
    )

  }
}

const displayDate = (dateString) => {
  const date = new Date(dateString)
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  const weekday = days[date.getDay()]
  const month = months[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  return `${weekday}, ${month} ${day} ${year}`

}

export default connect(null, { updatePriority })(Task)