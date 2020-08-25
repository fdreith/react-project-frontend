import React, { Component } from "react";
import { connect } from "react-redux";
import MyTasks from "./MyTasks.js";
import TaskForm from "./TaskForm.js";
import AssignedTasks from "./AssignedTasks.js";
import CompletedTasks from "./CompletedTasks.js";
import EditTask from "./EditTask.js";
import { Switch, Route } from "react-router-dom";
import TaskInfo from "./TaskInfo.js";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class TasksContainer extends Component {
  state = {
    renderTaskInfo: false,
    renderTaskEdit: false,
    renderTaskForm: false,
    task: "",
  };

  renderTaskInfo = (task) => {
    if (task.id === this.state.task.id) {
      this.setState({
        task: "",
        renderTaskInfo: false,
      });
    } else {
      this.setState({
        task: task,
        renderTaskInfo: true,
      });
    }
  };

  renderTaskEdit = () => {
    this.setState({
      renderTaskEdit: !this.state.renderTaskEdit,
      renderTaskInfo: !this.state.renderTaskInfo,
    });
  };

  renderTaskForm = () => {
    this.setState({
      renderTaskForm: !this.state.renderTaskForm,
    });
  };

  componentDidMount() {
    this.props.history.push("/tasks/my-tasks");
  }

  filterMyTasks = (tasks) => {
    return tasks
      .filter(
        (task) =>
          task.attributes.user.id === parseInt(this.props.currentUser.id)
      )
      .filter((task) => task.attributes.completed === false);
  };

  filterAssignedTasks = (tasks) => {
    return tasks
      .filter(
        (task) =>
          task.attributes.user.id !== parseInt(this.props.currentUser.id)
      )
      .filter((task) => task.attributes.completed === false);
  };

  filterCompletedTasks = (tasks) => {
    return tasks
      .filter((task) => task.attributes.completed === true)
      .filter(
        (task) =>
          task.attributes.user.id === parseInt(this.props.currentUser.id)
      );
  };

  render() {
    return (
      <div className="tasks-container">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Switch>
                <Route
                  exact
                  path="/tasks/my-tasks"
                  render={(routerProps) => (
                    <MyTasks
                      {...routerProps}
                      myTasks={this.filterMyTasks(this.props.tasks)}
                      key={this.filterMyTasks(this.props.tasks)}
                      currentUser={this.props.currentUser}
                      renderTaskInfo={this.renderTaskInfo}
                    />
                  )}
                />
                <Route
                  path="/tasks/assigned"
                  render={(routerProps) => (
                    <AssignedTasks
                      {...routerProps}
                      assignedTasks={this.filterAssignedTasks(this.props.tasks)}
                      key={this.filterAssignedTasks(this.props.tasks)}
                      renderTaskInfo={this.renderTaskInfo}
                    />
                  )}
                />
                <Route
                  path="/tasks/completed"
                  render={(routerProps) => (
                    <CompletedTasks
                      {...routerProps}
                      completedTasks={this.filterCompletedTasks(
                        this.props.tasks
                      )}
                      key={this.filterCompletedTasks(this.props.tasks)}
                      renderTaskInfo={this.renderTaskInfo}
                    />
                  )}
                />
              </Switch>
              {this.state.renderTaskForm || (
                <Button
                  variant="outline-secondary"
                  onClick={this.renderTaskForm}
                >
                  New Task
                </Button>
              )}
            </Col>
            <Col xs={12} md={6}>
              <div className="col s6">
                {this.state.renderTaskInfo && (
                  <TaskInfo
                    task={this.state.task}
                    history={this.props.history}
                    renderTaskEdit={this.renderTaskEdit}
                    renderTaskInfo={this.renderTaskInfo}
                  />
                )}
                {this.state.renderTaskEdit && (
                  <EditTask
                    task={this.state.task}
                    history={this.props.history}
                    renderTaskEdit={this.renderTaskEdit}
                  />
                )}
              </div>
            </Col>
          </Row>
        </Container>
        <hr />
        {this.state.renderTaskForm && (
          <TaskForm renderTaskForm={this.renderTaskForm} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    users: state.users,
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(TasksContainer);
