import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'
import Home from './containers/Home.js'
import NavBar from './components/NavBar.js'
import { fetchDepartments } from './actions/departments'
import LoginForm from './containers/LoginForm.js'
import SignUpForm from './containers/SignUpForm.js'



class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchDepartments()
  }

  render() {
    return (
      <div className="App">
        <NavBar loggedIn={this.props.loggedIn} />
        {this.props.loggedIn ? <Home /> : <><LoginForm /><br></br><br></br><SignUpForm departments={this.props.departments} /></>}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    departments: state.departments
  })
}

export default connect(mapStateToProps, { getCurrentUser, fetchDepartments })(App);


