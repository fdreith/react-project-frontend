import React, { Component } from "react";
import Comment from "./Comment.js";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { updateTask } from "../actions/tasks";
import CommentForm from "./CommentForm.js";
import Button from "react-bootstrap/Button";

class TaskInfo extends Component {
  state = {
    content: this.props.task.attributes.content,
    due_date: this.props.task.attributes.due_date,
    user_id: this.props.task.attributes.user.id,
    owner_id: this.props.task.attributes.owner.id,
    completed: true,
  };

  handleClick = () => {
    this.props.updateTask(
      this.state,
      this.props.task.attributes.id,
      this.props.history,
      "completed"
    );
    this.props.renderTaskInfo(this.props.task);
  };

  render() {
    return (
      <div>
        <br />
        <Card>
          <Card.Body>
            {!this.props.task.attributes.completed && (
              <svg
                onClick={this.props.renderTaskEdit}
                className="bi bi-pencil float-right"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z"
                  clipRule="evenodd"
                />
              </svg>
            )}

            <h4>{this.props.task.attributes.content}</h4>
            <h6>Mission Accomplished! This task has been completed.</h6>
            {this.props.task.attributes.completed || (
              <Button variant="outline-secondary" onClick={this.handleClick}>
                <svg
                  className="bi bi-check"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Mark Complete
              </Button>
            )}
            <p>
              Assigned to: {this.props.task.attributes.user.name} by{" "}
              {this.props.task.attributes.owner.name}
            </p>
            <h6>Task Comments:</h6>
            {this.props.comments.map(
              (comment) =>
                comment.attributes.task_id ===
                  this.props.task.attributes.id && (
                  <Comment
                    key={comment.attributes.id}
                    comment={comment}
                    currentUser={this.props.currentUser}
                  />
                )
            )}
            <CommentForm
              taskId={this.props.task.attributes.id}
              currentUser={this.props.currentUser}
            />
          </Card.Body>
        </Card>
        <br />
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, { updateTask })(TaskInfo);
