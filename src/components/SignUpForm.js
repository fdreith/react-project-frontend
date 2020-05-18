import React, { Component } from 'react'
import { signUp } from '../actions/currentUser'
import { connect } from 'react-redux'


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
    this.setState = ({
      name: "",
      email: "",
      password: "",
      department_id: null,
      supervisor: false
    })
  }


  render() {
    return (
      < form onSubmit={this.handleSubmit} >
        <label>New Users Sign Up:   </label>
        <br></br>
        <input placeholder="name" value={this.state.name} name="name" type="text" onChange={this.handleChange} /><br></br>
        <input placeholder="email" value={this.state.email} name="email" type="text" onChange={this.handleChange} /><br></br>
        <input placeholder="password" value={this.state.password} name="password" type="text" onChange={this.handleChange} />
        <br></br>
        <div>
          <label>Department:</label>
          {this.props.departments.map(department => <div key={department.attributes.id}><> <input id={department.attributes.id} key={department.attributes.id} type="radio" name="department_id" value={department.attributes.id} onChange={this.handleChange} /> <label htmlFor={department.attributes.id}>{department.attributes.name}</label></></div>)}
        </div>
        <br></br>
        <div>
          <label>Supervisor?</label>
          <br></br>
          <input type="radio" name="supervisor" id="sup-true" value="true" onChange={this.handleChange} />
          <label htmlFor="sup-true">Yes</label>
          <input type="radio" name="supervisor" id="sup-false" value="false" defaultChecked={true} onChange={this.handleChange} />
          <label htmlFor="sup-false">No</label>
        </div>
        <br></br>
        < input type="submit" value="Sign Up" />
      </form >
    )
  }
}

export default connect(null, { signUp })(SignUpForm)
