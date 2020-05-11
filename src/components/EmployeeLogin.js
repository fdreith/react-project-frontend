import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { login } from '../actions/currentEmployee'


class EmployeeLogin extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }

  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }



  handleSubmit = event => {
    event.preventDefault()
    login(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Employee Login:   </label>
        <input placeholder="email" type="text" name="email" onChange={this.handleChange} value={this.state.email} />
        <input placeholder="password" type="text" name="password" onChange={this.handleChange} value={this.state.password} />
        <input type="submit" value="Log In" />
      </form>
    )
  }

}
export default EmployeeLogin

