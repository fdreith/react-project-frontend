import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser";
import TasksContainer from "./components/TasksContainer.js";
import NavBar from "./components/NavBar.js";
import { fetchDepartments } from "./actions/departments";
import { fetchComments } from "./actions/comments";
import { withRouter } from "react-router-dom";
import AuthContainer from "./components/AuthContainer";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
    this.props.fetchDepartments();
    this.props.fetchComments();
  }

  render() {
    return (
      <div className="App">
        <NavBar loggedIn={this.props.loggedIn} history={this.props.history} />
        <br />
        {this.props.loggedIn ? (
          <TasksContainer history={this.props.history} />
        ) : (
          <AuthContainer history={this.props.history} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.currentUser,
  };
};

export default withRouter(
  connect(mapStateToProps, { getCurrentUser, fetchDepartments, fetchComments })(
    App
  )
);
