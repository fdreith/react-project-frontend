import React from 'react'
import TaskShow from './TaskShow'


const Task = (props) => {

  let taskInfo = ""
  const handleClick = event => {
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