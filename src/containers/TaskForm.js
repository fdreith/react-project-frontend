import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions/tasks'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';



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
    } else if (event.target.name === "due_date") {
      this.setState({
        due_date: parseInt(event.target.value)
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.login(this.state)
    this.setState = ({
      content: "",
      due_date: "",
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
          <DatePicker
            selected={this.state.due_date}
            onChange={this.handleChange}
            name="due_date"
            dateFormat="MM/dd/yyyy"
          />
        </div>
        <br></br>
        <label>Assigned to:</label>
        <div>
          {this.props.users.map(user => <div key={user.id}><> <input id={user.id} key={user.id} type="radio" name="user_id" value={user.id} onChange={this.handleChange} /> <label htmlFor={user.id}>{user.name}</label></></div>)}
        </div>
        <input type="submit" value="Add Task" />
        {console.log(this.state)}
        {console.log(this.props)}
      </form>
    )
  }

}

export default connect(null, { addTask })(TaskForm)




