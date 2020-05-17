import React, { Component } from 'react'
import Comment from './Comment.js'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateTask } from '../actions/tasks'
import CommentForm from './CommentForm.js'

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

          {this.props.comments.map(comment => comment.attributes.task_id === this.props.task.attributes.id && <Comment key={comment.attributes.id} comment={comment} currentUser={this.props.currentUser} />)}
          <CommentForm taskId={this.props.task.attributes.id} currentUser={this.props.currentUser} />
          {!this.props.completed &&
            <Link to={`/tasks/${this.props.task.attributes.id}/edit`}> Edit Task </Link>}

        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    comments: state.comments,
    currentUser: state.currentUser
  })
}

export default connect(mapStateToProps, { updateTask })(TaskInfo)