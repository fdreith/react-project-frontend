import React, { Component } from 'react'
import { postComment } from '../actions/comments'
import { connect } from 'react-redux'


class CommentForm extends Component {

  state = {
    content: "",
    task_id: this.props.taskId,
    user_id: parseInt(this.props.currentUser.id)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.postComment(this.state)
    this.setState = ({
      content: "",
      task_id: this.props.taskId,
      user_id: this.props.currentUser.id
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Comment on task" value={this.state.content} name="content" type="text" onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser,
  })
}

export default connect(mapStateToProps, { postComment })(CommentForm)




