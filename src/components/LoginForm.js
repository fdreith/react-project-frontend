import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


class LoginForm extends Component {

  state = {
    email: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.login(this.state, this.props.history)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group >
          <Form.Label>Login:</Form.Label>
          <Form.Control placeholder="email" value={this.state.email} name="email" type="text" onChange={this.handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control placeholder="password" value={this.state.password} name="password" type="password" onChange={this.handleChange} />
        </Form.Group>
        <Button size="sm" variant="outline-secondary" type="submit">Login</Button>
      </Form>
    )
  }
}

export default LoginForm




