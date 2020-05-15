import React from 'react'
import { connect } from 'react-redux'


const Comment = (props) => {

  const findUser = userId => {
    return props.users.find(user => user.id === userId)
  }
  return (
    <div>
      <p>
        {findUser(props.comment.user_id).name}: {props.comment.content} at {props.comment.created_at}
      </p>
      {console.log(props)}
    </div>
  )
}
const mapStateToProps = state => {
  return ({
    users: state.users
  })
}

export default connect(mapStateToProps)(Comment)