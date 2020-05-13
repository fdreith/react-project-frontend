import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postTask } from '../actions/tasks'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



class TaskForm extends Component {

  state = {
    content: "",
    due_date: new Date(),
    user_id: null,
    owner_id: this.props.currentUser.id
  }

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
    this.props.postTask(task)
    this.setState = ({
      content: "",
      due_date: new Date(),
      user_id: null,
      owner_id: this.props.currentUser.id
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>New Task:   </label>
        <br></br>
        <input placeholder="task" value={this.state.content} name="content" type="textarea" onChange={this.handleChange} />
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
        <input type="submit" value="Add Task" />
        {console.log(this.state)}
      </form>
    )
  }
}

export default connect(null, { postTask })(TaskForm)




