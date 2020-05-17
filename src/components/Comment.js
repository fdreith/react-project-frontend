import React from 'react'
import { connect } from 'react-redux'
import { deleteComment } from '../actions/comments'


const Comment = (props) => {

  return (
    <div>
      <p>
        {props.comment.attributes.user.name} at {displayDateAndTime(props.comment.attributes.created_at)} : {props.comment.attributes.content}
        {props.comment.attributes.user.id === parseInt(props.currentUser.attributes.id) && <button onClick={() => props.deleteComment(props.comment.attributes.id)}>X</button>}
      </p>
    </div>
  )
}

const displayDateAndTime = (dateString) => {
  const date = new Date(dateString)
  const month = date.getMonth() + 1
  const hour = date.getHours()
  const min = date.getMinutes()
  return `${hour}:${min} on ${month}-${date.getDate()}-${date.getFullYear()}`
}

export default connect(null, { deleteComment })(Comment)