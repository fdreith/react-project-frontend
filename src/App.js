import React, { Component } from 'react';
import './App.css';
import EmployeeLogin from "./components/EmployeeLogin.js"
import SupervisorLogin from "./components/SupervisorLogin.js"

class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>Task Assign</h2>
        <EmployeeLogin />
        <br></br><br></br>
        <SupervisorLogin />
      </div>
    );
  }
}

export default App;


