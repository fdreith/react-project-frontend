import React, { Component } from 'react'
import { connect } from 'react-redux';
import MyTasks from '../components/MyTasks.js'
import TaskForm from './TaskForm.js'


class Home extends Component {

  render() {
    let myTasksComponent
    if (Object.keys(this.props.tasks).length === 0) {
      myTasksComponent = <MyTasks />
    } else {
      myTasksComponent = "You have no tasks yet."
    }
    return (
      <div>
        <h4>{this.props.currentUser.attributes.name}'s Tasks:</h4>
        <>
          {myTasksComponent}
          <TaskForm users={this.props.users} currentUser={this.props.currentUser} />
        </>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser,
    users: state.users,
    tasks: state.tasks
  })
}

export default connect(mapStateToProps)(Home)