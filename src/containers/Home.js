import React from 'react'
import { connect } from 'react-redux';
import MyTasks from '../components/MyTasks.js'
import TaskForm from './TaskForm.js'


const Home = props => {

  return (
    <div>
      {console.log(props)}
      <h4>{props.currentUser.name}'s Tasks:</h4>
      <>
        <MyTasks currentUser={props.currentUser} />
        <TaskForm users={props.users} currentUser={props.currentUser} />
      </>
    </div>
  )
}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser,
    users: state.users
  })
}

export default connect(mapStateToProps)(Home)