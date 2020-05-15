import React from 'react'
import Comment from './Comment.js'
import CommentForm from './CommentForm.js'
import Card from 'react-bootstrap/Card'
import { deleteTask } from '../actions/tasks'
import { connect } from 'react-redux'


const TaskShow = ({ task }) => {

  return (
    <div>
      <Card>
        <button onClick={props.deleteTask(task.attributes.id)}>X</button>
        <p>Assigned by: {task.attributes.owner.name}</p>
        {task.attributes.comments.map(comment => <Comment key={comment.id} comment={comment} />)}

        {/* <CommentForm taskId={task.attributes.id} /> */}
      </Card>
    </div>


  )

}

export default connect(null, { deleteTask })(TaskShow)