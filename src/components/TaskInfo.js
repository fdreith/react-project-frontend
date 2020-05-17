import React, { Component } from 'react'
import Comment from './Comment.js'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateTask } from '../actions/tasks'
// import CommentForm from './CommentForm.js'

class TaskInfo extends Component {

  state = {
    content: this.props.task.attributes.content,
    due_date: this.props.task.attributes.due_date,
    user_id: this.props.task.attributes.user.id,
    owner_id: this.props.task.attributes.owner.id,
    completed: true
  }

  handleClick = () => {
    this.props.updateTask(this.state, this.props.task.attributes.id, this.props.history)
  }

  render() {
    return (
      <div>
        <Card>
          <p>Assigned to: {this.props.task.attributes.user.name} by {this.props.task.attributes.owner.name}</p>
          {this.props.completed ||
            <button onClick={this.handleClick}>Completed</button>}
          {this.props.task.attributes.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
          {/* <CommentForm taskId={this.props.task.attributes.id} /> */}
          <Link to={`/tasks/${this.props.task.attributes.id}/edit`}> Edit Task </Link>
        </Card>
      </div>
    )
  }
}



export default connect(null, { updateTask })(TaskInfo)