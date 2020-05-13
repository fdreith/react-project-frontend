import React, { Component } from 'react'
import { login } from '../actions/currentUser'
import { connect } from 'react-redux'


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
    this.props.login(this.state)
    this.setState = ({
      email: "",
      password: ""
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Login:   </label>
        <br></br>
        <input placeholder="email" value={this.state.email} name="email" type="text" onChange={this.handleChange} />
        <input placeholder="password" value={this.state.password} name="password" type="text" onChange={this.handleChange} />
        <input type="submit" value="Log In" />
      </form>
    )
  }


}
export default connect(null, { login })(LoginForm)




