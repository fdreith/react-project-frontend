import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'
import Home from './containers/TasksContainer.js'
import NavBar from './components/NavBar.js'
import { fetchDepartments } from './actions/departments'
import LoginForm from './containers/LoginForm.js'
import SignUpForm from './containers/SignUpForm.js'
import Container from 'react-bootstrap/Container'


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchDepartments()
  }

  render() {
    return (
      <div className="App">
        <Container fluid>
          <NavBar loggedIn={this.props.loggedIn} />
          {this.props.loggedIn ? <Home /> : <><LoginForm /><br></br><br></br><SignUpForm departments={this.props.departments} /></>}
        </Container >
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


