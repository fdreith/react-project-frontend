import React, { Component } from "react";
import { postComment } from "../actions/comments";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class CommentForm extends Component {
  state = {
    content: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postComment({
      ...this.state,
      task_id: this.props.taskId,
      user_id: parseInt(this.props.currentUser.id),
    });
    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="comment">
          <Form.Control
            size="sm"
            type="text"
            name="content"
            value={this.state.content}
            placeholder="New comment.."
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button size="sm" variant="outline-secondary" type="submit">
          <i class="fa fa-telegram"></i>
        </Button>
      </Form>
    );
  }
}

export default connect(null, { postComment })(CommentForm);
