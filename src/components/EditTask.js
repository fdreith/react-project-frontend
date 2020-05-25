import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTask, deleteTask } from '../actions/tasks'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const initialState = {
  content: "",
  due_date: new Date(),
  user_id: 0,
  owner_id: 0
}

class EditTask extends Component {

  state = {
    content: this.props.task.attributes.content,
    due_date: new Date(this.props.task.attributes.due_date),
    user_id: this.props.task.attributes.user.id,
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
    this.props.updateTask({
      ...this.state, owner_id: parseInt(this.props.currentUser.id)
    }, this.props.task.attributes.id, this.props.history, "incomplete")
    this.setState({
      initialState
    })
  }

  render() {
    return (
      <div className="task-edit">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group >
            <Form.Label>Edit Task:</Form.Label>
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
          <Button size="sm" variant="outline-secondary" type="submit">Update Task</Button>
        </Form>
        <br></br>
        {this.props.task && <Button size="sm" variant="outline-secondary" onClick={() => this.props.deleteTask(this.props.task.attributes.id, this.props.history)} type="button" value="Delete Task"> Delete Task </Button>}
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
