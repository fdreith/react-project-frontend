import React, { Component } from 'react'
import { login } from '../actions/currentEmployee'
import { connect } from 'react-redux'


class EmployeeLogin extends Component {

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
    login(this.state)
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
export default connect(null, { login })(EmployeeLogin)



// import React from 'react'
// import { login } from '../actions/currentEmployee'
// import { updateLoginForm } from "../actions/loginForm.js"
// import { connect } from 'react-redux'

// const EmployeeLogin = props => {


//   const handleChange = event => {
//     const updatedFormData = {
//       ...props.loginFormData,
//       [event.target.name]: event.target.value
//     }
//     updateLoginForm(updatedFormData)
//   }

//   const handleSubmit = event => {
//     event.preventDefault()
//     login(props.loginFormData)
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Employee Login:   </label>
//         <input placeholder="email" value={props.loginFormData.email} type="text" name="email" onChange={handleChange} />
//         <input placeholder="password" type="text" name="password" onChange={handleChange} value={props.loginFormData.password} />
//         <input type="submit" value="Log In" />
//       </form>
//     </div>
//   )

// }
// const mapStateToProps = state => {
//   return {
//     loginFormData: state.loginForm
//   }
// }

// export default connect(mapStateToProps, { updateLoginForm, login })(EmployeeLogin)
