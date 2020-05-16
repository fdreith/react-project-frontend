import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTask, deleteTask } from '../actions/tasks'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const initialState = {
  content: "",
  due_date: new Date(),
  user_id: 0,
  owner_id: 0

}

class EditTask extends Component {

  state = this.props.task ?
    {
      content: this.props.task.attributes.content,
      due_date: new Date(this.props.task.attributes.due_date),
      user_id: this.props.task.attributes.user.id,
      owner_id: this.props.currentUser.id
    } :
    initialState

  handleChange = event => {
    if (event.target.name === "user_id") {
      this.setState({
        user_id: parseInt(event.target.value)
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  handleDateChange = event => {
    this.setState({
      due_date: event
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const task = this.state
    task.due_date = task.due_date.toString()
    task.owner_id = parseInt(task.owner_id)
    this.props.updateTask(task, this.props.task.attributes.id, this.props.history)
  }

  render() {
    return (
      <div className="task-edit">
        <form onSubmit={this.handleSubmit}>
          <label>Edit Task:   </label>
          <br></br>
          <input value={this.state.content} name="content" type="textarea" onChange={this.handleChange} />
          <br></br>
          <div className="form-group">
            <label>Select Due Date:</label>
            <br></br>
            <DatePicker
              selected={this.state.due_date}
              onChange={this.handleDateChange}
              name="due_date"
              dateFormat="MM/dd/yyyy"
            />
          </div>
          <label htmlFor="user-select">Who is this task assigned to:</label>
          <br></br>
          <select name="user_id" id="user-select" onChange={this.handleChange}>
            <option value="">Choose a user</option>
            {this.props.users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
          </select>
          <br></br>
          <br></br>
          <input type="submit" value="Update Task" />
        </form>
        <input onClick={() => this.props.deleteTask(this.props.task.attributes.id, this.props.history)} type="button" value="Delete Task" />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser,
    users: state.users
  })
}

export default connect(mapStateToProps, { updateTask, deleteTask })(EditTask)
