import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import TaskInfo from './TaskInfo'


class MyTasks extends Component {

  state = {
    currentUser: this.props.currentUser,
    myTasks: this.props.myTasks,
    showComponent: false,
  }

  handleClick = event => {
    this.setState({
      showComponent: !this.state.showComponent,
    })
  }

  renderTableData() {
    return this.state.myTasks.map((task, index) => {
      const { id, content, due_date } = task.attributes
      return (
        <tbody key={id} >
          <tr className={due_date > new Date() ? "text-default" : "text-danger"} onClick={this.handleClick}>
            <td>{content}</td>
            <td>{todayOrTomorrow(due_date) || displayDate(due_date)
            }</td>
          </tr>
          <tr >
            {this.state.showComponent &&
              <TaskInfo task={task} history={this.props.history} />}

          </tr>
        </tbody>
      )
    })
  }

  render() {
    return (
      <div className="myTasks">
        <h6>{this.state.currentUser.attributes.name}'s Tasks:</h6>
        <Table className="table">
          <thead>
            <tr>
              <th scope="col">Task</th>
              <th scope="col">Due Date</th>
              {/* <th scope="col">OKR</th> */}
            </tr>
          </thead>
          {this.renderTableData()}
        </Table>
      </div >
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

export default MyTasks
