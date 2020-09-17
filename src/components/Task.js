import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = (props) => {
  const renderTask = () => {
    if (props.task.attributes.completed) {
      return (
        <div>
          <li
            id={props.task.attributes.id}
            onClick={(e) => props.renderTaskInfo(props.task, e)}
          >
            <FontAwesomeIcon icon="coffee" />
            {props.task.attributes.content}
          </li>
        </div>
      );
    } else {
      return (
        <div>
          <li
            id={props.task.attributes.id}
            className={
              props.task.attributes.due_date > new Date()
                ? "text-default"
                : "text-danger"
            }
            onClick={() => props.renderTaskInfo(props.task)}
          >
            {props.task.attributes.content} - by{" "}
            {todayOrTomorrow(props.task.attributes.due_date) ||
              displayDate(props.task.attributes.due_date)}
          </li>
        </div>
      );
    }
  };

  return <div>{renderTask()}</div>;
};

const todayOrTomorrow = (date) => {
  if (
    date.getFullYear() === new Date().getFullYear() &&
    date.getMonth() === new Date().getMonth() &&
    date.getDate() === new Date().getDate()
  ) {
    return "Today";
  } else if (
    date.getFullYear() === new Date().getFullYear() &&
    date.getMonth() === new Date().getMonth() &&
    date.getDate() === new Date().getDate() + 1
  ) {
    return "Tomorrow";
  } else {
    return false;
  }
};

const displayDate = (dateString) => {
  const date = new Date(dateString);
  const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weekday = days[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${weekday}, ${month} ${day} ${year}`;
};

export default Task;
