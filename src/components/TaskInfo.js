import React from 'react'
import Comment from './Comment.js'
// import CommentForm from './CommentForm.js'
import Card from 'react-bootstrap/Card'
// import { deleteTask } from '../actions/tasks'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const TaskInfo = (props) => {

  return (
    <div>
      <Card>
        <p>Assigned by: {props.task.attributes.owner.name}</p>
        {props.task.attributes.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        <Link to={`/tasks/${props.task.attributes.id}/edit`}> Edit </Link>


        {/* <CommentForm taskId={task.attributes.id} /> */}
      </Card>
    </div>


  )

}

export default TaskInfo