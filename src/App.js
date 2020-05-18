import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'
import TasksContainer from './components/TasksContainer.js'
import NavBar from './components/NavBar.js'
import { fetchDepartments } from './actions/departments'
import { fetchComments } from './actions/comments'
import LoginForm from './components/LoginForm.js'
import SignUpForm from './components/SignUpForm.js'
import { withRouter } from 'react-router-dom';

import MyTasks from './components/MyTasks.js'
import TaskForm from './components/TaskForm.js'
import AssignedTasks from './components/AssignedTasks.js'
import CompletedTasks from './components/CompletedTasks.js'
import EditTask from './components/EditTask.js'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchDepartments()
    this.props.fetchComments()
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

export default withRouter(connect(mapStateToProps, { getCurrentUser, fetchDepartments, fetchComments })(App))


