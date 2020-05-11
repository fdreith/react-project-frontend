import React, { Component } from 'react'
// import { updateLoginForm } from "../actions/loginForm.js"
import { connect } from 'react-redux'


class SupervisorLogin extends Component {

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
    // login(this.state, history)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Supervisor Login:   </label>
        <input placeholder="email" value={this.state.email} name="email" type="text" onChange={this.handleChange} />
        <input placeholder="password" value={this.state.password} name="password" type="text" onChange={this.handleChange} />
        <input type="submit" value="Log In" />
      </form>
    )
  }


}
export default connect(null, {})(SupervisorLogin)