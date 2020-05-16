import React, { Component } from 'react'
import TaskInfo from './TaskInfo'
import { Link } from 'react-router-dom'

class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showComponent: false,
    }
  }

  handleClick = event => {
    this.setState({
      showComponent: !this.state.showComponent
    })
  }

  render() {
    return (
      <div>
        <li onClick={this.handleClick}>
          {this.props.task.attributes.content} - by {displayDate(this.props.task.attributes.due_date)}
          {/* {this.props.task.attributes.content || "You have no tasks"} */}

        </li>
        {this.state.showComponent &&
          <TaskInfo task={this.props.task} history={this.props.history}/>
        }
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

export default Task