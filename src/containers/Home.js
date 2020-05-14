import React, { Component } from 'react'
import { connect } from 'react-redux';
import MyTasks from '../components/MyTasks.js'
import TaskForm from './TaskForm.js'


class Home extends Component {

  render() {
    return (
      <div>
        <h4>{this.props.currentUser.attributes.name}'s Tasks:</h4>
        <>
          <MyTasks />
          <TaskForm users={this.props.users} currentUser={this.props.currentUser} />
        </>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser,
    users: state.users
  })
}

export default connect(mapStateToProps)(Home)