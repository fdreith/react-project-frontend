import React, { Component } from 'react'
// import { postComment } from '../actions/comments'
import { connect } from 'react-redux'


class CommentForm extends Component {

  state = {
    content: "",
    user_id: this.props.currentUser.id
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    // this.props.postComment(this.state)
    this.setState = ({
      content: "",
      user_id: this.props.currentUser.id
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Login:   </label>
        <br></br>
        <input placeholder="email" value={this.state.email} name="email" type="text" onChange={this.handleChange} />
        <input placeholder="password" value={this.state.password} name="password" type="text" onChange={this.handleChange} />
        <input type="submit" value="Log In" />
      </form>
    )
  }
}
const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser,
  })
}

export default connect(mapStateToProps)(CommentForm)




