import React, { Component } from 'react'
import { connect } from 'react-redux';
import MyTasks from '../components/MyTasks.js'
import TaskForm from './TaskForm.js'
import { fetchTasks } from '../actions/tasks'


class Home extends Component {

  componentDidMount() {
    this.props.fetchTasks()
  }

  filterTasks = () => {
    const assignedTasks = this.props.tasks.filter(task => task.relationships.owner.data.id === this.props.currentUser.id)
    const myTasks = this.props.tasks.filter(task => task.relationships.user.data.id === this.props.currentUser.id)
    debugger

  }

  render() {
    return (
      <div>
        {console.log(this.props)}
        <h4>{this.props.currentUser.attributes.name}'s Tasks:</h4>
        <>
          <MyTasks currentUser={this.props.currentUser} tasks={this.filterTasks()} />
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

export default connect(mapStateToProps, { fetchTasks })(Home)