import React from 'react'
import { connect } from 'react-redux'
import { deleteComment } from '../actions/comments'
import Button from 'react-bootstrap/Button'


const Comment = (props) => {

  return (
    <div>
      <p>
        {props.comment.attributes.user.name} at {displayDateAndTime(props.comment.attributes.created_at)} : {props.comment.attributes.content}
        {props.comment.attributes.user.id === parseInt(props.currentUser.attributes.id) && <Button variant="light" size="sm" onClick={() => props.deleteComment(props.comment.attributes.id)}>
          <svg className="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clipRule="evenodd" />
          </svg>
        </Button>}
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