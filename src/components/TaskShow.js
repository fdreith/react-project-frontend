import React from 'react'
import Comment from './Comment.js'
import CommentForm from './CommentForm.js'


const TaskShow = ({ task }) => {

  return (
    task
      ? <div>
        <p>Due Date: {task.attributes.due_date}</p>
        <p>Assigned from:{task.attrubutes.owner.name}</p>
        <ul>
          {task.attributes.comments.map(comment => <Comment comment={comment} />)}
          <CommentForm taskId={task.id} />

        </ul>
      </div>
      : <p>task show page</p>
  )

}

export default TaskShow