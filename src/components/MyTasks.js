import React from "react";
import Task from "./Task.js";

const MyTasks = (props) => {
  return (
    <div className="myTasks">
      <h6>{props.currentUser.attributes.name}'s Tasks:</h6>
      <ul>
        {props.myTasks.map((task) => {
          return (
            <div key={task.id}>
              <Task
                task={task}
                history={props.history}
                toggleTaskInfo={props.toggleTaskInfo}
                handleComplete={props.handleComplete}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MyTasks;
