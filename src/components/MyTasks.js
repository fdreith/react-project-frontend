import React, { Component } from "react";
import Task from "./Task.js";
import TaskInfo from "./TaskInfo.js";

class MyTasks extends Component {
  state = {
    showComponent: false,
    task: "",
  };

  showComponent = (event) => {
    const taskId = event.target.attributes.id.nodeValue;
    const task = this.props.myTasks.find((task) => task.id === taskId);
    this.setState((state) => ({
      showComponent: !state.showComponent,
      task: task,
    }));
  };

  render() {
    return (
      <div className="myTasks">
        <div className="row">
          <div className="col-xs-4">
            <h6>{this.props.currentUser.attributes.name}'s Tasks:</h6>
            <ul>
              {this.props.myTasks.map((task) => {
                return (
                  <div key={task.id}>
                    <Task
                      task={task}
                      history={this.props.history}
                      showComponent={this.showComponent}
                    />
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="col-xs-4">
            {this.state.showComponent && (
              <TaskInfo task={this.state.task} history={this.props.history} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MyTasks;
