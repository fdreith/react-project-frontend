import React, { Component } from 'react'
import Task from './Task.js'
import Button from 'react-bootstrap/Button'


class MyTasks extends Component {

  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }


  render() {

    return (
      <div className="myTasks">
        <h6>{this.props.currentUser.attributes.name}'s Tasks:</h6>
        <ul>
          {this.props.myTasks && this.props.myTasks.map(task => {
            return (
              <div key={task.id}>
                <Task task={task} history={this.props.history} />
               
              </div>)
          })}
        </ul>
      </div>
    )
  }
}


export default MyTasks

