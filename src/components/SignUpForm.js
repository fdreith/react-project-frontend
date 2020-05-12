import React, { Component } from 'react'
import { signUp } from '../actions/currentUser'
import { connect } from 'react-redux'


class SignUpForm extends Component {

  state = {
    name: "",
    email: "",
    password: "",
    department_id: "",
    supervisor: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.signUp(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Sign Up:   </label>
        <br></br>
        <input placeholder="name" value={this.state.name} name="name" type="text" onChange={this.handleChange} />
        <input placeholder="email" value={this.state.email} name="email" type="text" onChange={this.handleChange} />
        <input placeholder="password" value={this.state.password} name="password" type="text" onChange={this.handleChange} />
        <input type="radio" name="department_id" />
        <input type="submit" value="Log In" />
      </form>
    )
  }
}

export default connect(null, { signUp })(SignUpForm)
