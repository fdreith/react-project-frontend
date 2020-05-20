import React, { Component } from 'react'
import LoginForm from './LoginForm.js'
import SignUpForm from './SignUpForm.js'
import { login } from '../actions/currentUser'
import { signUp } from '../actions/currentUser'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';


class AuthContainer extends Component {

  componentDidMount() {
    this.props.history.push('/login')
  }

  render() {
    return (
      <Switch>
        <Route
          path="/login"
          render={(routerProps) => <LoginForm {...routerProps} history={this.props.history} login={this.props.login} />}
        />
        <Route
          path="/signup"
          render={(routerProps) => <SignUpForm {...routerProps} departments={this.props.departments} signUp={this.props.signUp} />}
        />
      </Switch >
    )
  }
}

const mapStateToProps = state => {
  return ({
    departments: state.departments
  })
}

export default connect(mapStateToProps, { login, signUp })(AuthContainer)