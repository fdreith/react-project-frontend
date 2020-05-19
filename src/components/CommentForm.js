import React, { Component } from 'react'
import { postComment } from '../actions/comments'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


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
    this.setState({
      content: "",
      task_id: this.props.taskId,
      user_id: parseInt(this.props.currentUser.id)
    })
  }

  render() {
    return (
      // <form onSubmit={this.handleSubmit}>
      //   <input placeholder="Comment on task" value={this.state.content} name="content" type="text" onChange={this.handleChange} />
      //   <input type="submit" value="Submit" />
      // </form>

      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="comment">
          <Form.Control size="sm" type="text" name="content" value={this.state.content} placeholder="New comment.." onChange={this.handleChange} />
        </Form.Group>
        <Button size="sm" variant="outline-secondary" type="submit">Submit</Button>
      </Form>
    )
  }
}

export default connect(null, { postComment })(CommentForm)




