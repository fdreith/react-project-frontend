import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'
import TasksContainer from './components/TasksContainer.js'
import NavBar from './components/NavBar.js'
import { fetchDepartments } from './actions/departments'
import LoginForm from './components/LoginForm.js'
import SignUpForm from './components/SignUpForm.js'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchDepartments()
  }

  render() {
    return (
      <div className="App">
        <NavBar loggedIn={this.props.loggedIn} />
        {this.props.loggedIn ?
          <TasksContainer />
          :
          <><LoginForm /><br></br><br></br>
            <SignUpForm departments={this.props.departments} />
          </>}
 
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


