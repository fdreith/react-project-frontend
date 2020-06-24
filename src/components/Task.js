import React, { Component } from 'react'
import TaskInfo from './TaskInfo'

class Task extends Component {
  state = {
    showComponent: false,
  }

  handleClick = event => {
    this.setState({
      showComponent: !this.state.showComponent,
    })
  }

  renderTask = () => {
    if (this.props.completed) {
      return (
        <div>
          <li onClick={this.handleClick}>
            {this.props.task.attributes.content}
            <br />
            {this.state.showComponent &&
              <TaskInfo task={this.props.task} history={this.props.history} completed={this.props.completed} />
            }
          </li>
        </div>
      )
    } else {
      return (
        <div className="row">
          <div className="col-xs-4">
          </div>
          <div className="col-xs-4">
            <li
              className={this.props.task.attributes.due_date > new Date() ? "text-default" : "text-danger"}
              onClick={this.handleClick}>
              {this.props.task.attributes.content} - by {todayOrTomorrow(this.props.task.attributes.due_date) || displayDate(this.props.task.attributes.due_date)
              }
              <br />
              {this.state.showComponent &&
                <TaskInfo task={this.props.task} history={this.props.history} />
              }
            </li>
          </div>
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

const todayOrTomorrow = (date) => {
  if (date.getFullYear() === new Date().getFullYear() &&
    date.getMonth() === new Date().getMonth() &&
    date.getDate() === new Date().getDate()) {
    return "Today"
  } else if (date.getFullYear() === new Date().getFullYear() &&
    date.getMonth() === new Date().getMonth() &&
    date.getDate() === (new Date().getDate() + 1)) {
    return "Tomorrow"
  } else {
    return false
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

export default Task