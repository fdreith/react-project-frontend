import React from 'react'
import Task from './Task.js'
import { connect } from 'react-redux';


const MyTasks = props => {

  return (
    <div className="myTasks">
      <h5>{props.currentUser.attributes.name}'s
  Tasks:</h5>
      <ul>
        {props.myTasks && props.myTasks.map(task => <Task key={task.id} task={task} history={props.history} />)}
      </ul>
    </div>
  )
}

// const mapStateToProps = state => {

//   return ({
//     currentUser: state.currentUser,
//     myTasks: state.myTasks
//     myTasks: sortByDate(state.tasks.myTasks)
//   })

// }

// const sortByDate = (tasks) => {
//   return tasks.sort(function (a, b) {
//     const dueDateA = a.attributes.due_date
//     const dueDateB = b.attributes.due_date
//     if (dueDateA < dueDateB) {
//       return -1
//     }
//     if (dueDateA > dueDateB) {
//       return 1
//     }
//     return 0
//   })
// }

// export default connect(mapStateToProps)(MyTasks)
export default MyTasks

