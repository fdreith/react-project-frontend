import React from 'react'
import TaskShow from './TaskShow'
// import Accordion from 'react-bootstrap/Accordion'
// import Card from 'react-bootstrap/Card'
// import Comment from './Comment.js'
// import CommentForm from './CommentForm.js'


const Task = (props) => {

  let taskInfo
  const handleClick = event => {
    console.log("clicked", props.task.attributes.id || "")
    return taskInfo = <TaskShow task={props.task} />
  }

  return (
    <div>
      <li onClick={handleClick} name={props.task}>
        {props.task.attributes.content || "You have no tasks"}
        {taskInfo}
      </li>
    </div>
  )


}

export default Task