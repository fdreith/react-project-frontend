import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/users'
import MyTasks from '../components/MyTasks.js'
import TaskForm from '../components/MyTasks.js'


class Home extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
        <h4>{this.props.currentUser.name}'s Tasks:</h4>
        <>
          <MyTasks currentUser={this.props.currentUser} />
          <TaskForm />
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

export default connect(mapStateToProps, { fetchUsers })(Home)