import React, { Component } from 'react';
import './App.css';
import UserLogin from "./components/UserLogin.js"


class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>Task Assign</h2>
        <UserLogin />
  
      </div>
    );
  }
}

export default App;


