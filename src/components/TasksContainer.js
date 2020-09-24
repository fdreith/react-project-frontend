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
import { updateTask } from "../actions/tasks";

class TasksContainer extends Component {
  state = {
    toggleTaskInfo: false,
    renderTaskEdit: false,
    renderTaskForm: false,
    splitColumn: false,
    task: "",
  };

  toggleTaskInfo = (task) => {
    if (task.id === this.state.task.id) {
      this.setState({
        task: "",
        toggleTaskInfo: false,
        splitColumn: !this.state.splitColumn,
      });
    } else {
      this.setState({
        task: task,
        toggleTaskInfo: true,
        splitColumn: true,
      });
    }
  };

  renderTaskEdit = () => {
    this.setState({
      renderTaskEdit: !this.state.renderTaskEdit,
      toggleTaskInfo: !this.state.toggleTaskInfo,
    });
  };

  renderTaskForm = () => {
    this.setState({
      renderTaskForm: !this.state.renderTaskForm,
      splitColumn: true,
    });
  };

  handleComplete = (task) => {
    this.props.updateTask(
      {
        content: task.attributes.content,
        due_date: task.attributes.due_date,
        user_id: task.attributes.user.id,
        owner_id: task.attributes.owner.id,
        completed: task.attributes.completed ? false : true,
      },
      task.attributes.id,
      this.props.history,
      task.attributes.completed || "completed"
    );
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
          {this.state.renderTaskForm || (
            <Button variant="outline-secondary" onClick={this.renderTaskForm}>
              New Task
            </Button>
          )}
          <br />
          <br />
          <Row>
            <Col xs={12} md={this.state.splitColumn ? 6 : 12}>
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
                      toggleTaskInfo={this.toggleTaskInfo}
                      handleComplete={this.handleComplete}
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
                      toggleTaskInfo={this.toggleTaskInfo}
                      handleComplete={this.handleComplete}
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
                      toggleTaskInfo={this.toggleTaskInfo}
                      handleComplete={this.handleComplete}
                    />
                  )}
                />
              </Switch>
            </Col>
            <Col xs={12} md={6}>
              <div className="col s6">
                {this.state.renderTaskForm && (
                  <TaskForm renderTaskForm={this.renderTaskForm} />
                )}
                {this.state.toggleTaskInfo && (
                  <TaskInfo
                    task={this.state.task}
                    history={this.props.history}
                    renderTaskEdit={this.renderTaskEdit}
                    toggleTaskInfo={this.toggleTaskInfo}
                    handleComplete={this.handleComplete}
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

export default connect(mapStateToProps, { updateTask })(TasksContainer);
