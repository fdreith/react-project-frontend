import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


class SignUpForm extends Component {

  state = {
    name: "",
    email: "",
    password: "",
    department_id: null,
    supervisor: false
  }

  handleChange = event => {
    if (event.target.name === "supervisor") {
      this.setState({
        supervisor: (event.target.value === 'true')
      })
    } else if (event.target.name === "department_id") {
      this.setState({
        department_id: parseInt(event.target.value)
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.signUp(this.state)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Label>Sign Up:</Form.Label>
        <Form.Group >
          <Form.Label>Name:</Form.Label>
          <Form.Control placeholder="name" value={this.state.name} name="name" type="text" onChange={this.handleChange} />
        </Form.Group>
        <Form.Group >
          <Form.Label>Email:</Form.Label>
          <Form.Control placeholder="email" value={this.state.email} name="email" type="text" onChange={this.handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control placeholder="password" value={this.state.password} name="password" type="password" onChange={this.handleChange} />
        </Form.Group>
        <Form.Group >
          <Form.Label>Department:</Form.Label>
          <Form.Control as="select" name="department_id" id="department" onChange={this.handleChange} custom>
            <option value="">Choose a Department</option>
            {this.props.departments.map(department => <option key={department.attributes.id} value={department.attributes.id}>{department.attributes.name}</option>)}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <label>Supervisor?</label>
          <br></br>
          <input type="radio" name="supervisor" id="sup-true" value="true" onChange={this.handleChange} />
          <label htmlFor="sup-true">Yes</label>
          <input type="radio" name="supervisor" id="sup-false" value="false" defaultChecked={true} onChange={this.handleChange} />
          <label htmlFor="sup-false">No</label>
        </Form.Group>
        <Button size="sm" variant="outline-secondary" type="submit">Sign Up</Button>
      </Form>
    )
  }
}

export default SignUpForm
