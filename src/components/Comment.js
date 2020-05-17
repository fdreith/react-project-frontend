import React from 'react'
import { connect } from 'react-redux'


const Comment = (props) => {

  const findUser = userId => {
    return props.users.find(user => user.id === userId)
  }

  return (
    <div>
      <p>
        {findUser(props.comment.user_id).name} at {displayDateAndTime(props.comment.created_at)} : {props.comment.content}
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

const mapStateToProps = state => {
  return ({
    users: state.users
  })
}

export default connect(mapStateToProps)(Comment)