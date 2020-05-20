import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postTask } from '../actions/tasks'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'



class TaskForm extends Component {

  state = {
    content: "",
    due_date: new Date(),
    user_id: this.props.currentUser.id,
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
    this.props.postTask(this.state)
    this.setState({
      content: "",
      due_date: new Date(),
      user_id: this.props.currentUser.id,
      owner_id: this.props.currentUser.id
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group >
          <Form.Label>New Task:</Form.Label>
          <Form.Control value={this.state.content} name="content" type="textarea" onChange={this.handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Select Due Date:</Form.Label>
          <br></br>
          <DatePicker
            selected={this.state.due_date}
            onChange={this.handleDateChange}
            name="due_date"
            dateFormat="MM/dd/yyyy"
          />
        </Form.Group>
        <Form.Group >
          <Form.Label>Who is this task assigned to:</Form.Label>
          <Form.Control
            as="select"
            name="user_id"
            id="user-select"
            value={this.state.user_id}
            onChange={this.handleChange}
            custom>
            <option value={this.props.currentUser.id}>Choose a user</option>
            {this.props.users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
          </Form.Control>
        </Form.Group>
        <Button size="sm" variant="outline-secondary" type="submit">Add Task</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser,
    users: state.users
  })
}

export default connect(mapStateToProps, { postTask })(TaskForm)




