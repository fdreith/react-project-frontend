
export const setTasks = tasks => {
  return {
    type: "SET_TASKS",
    tasks
  }
}

export const postTask = task => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(task)
    })
      .then(resp => resp.json())
      .then(response => {
        if (response.content) {
          alert(response.content)
        } else {
          dispatch(addTask(response.data))
        }
      })
    // .catch(alert) 
  }
}

export const addTask = task => {
  return {
    type: "ADD_TASK",
    task
  }
}

export const updateTask = (task, id, history) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(task)
    })
      .then(resp => resp.json())
      .then(response => {
        if (response.content) {
          alert(response.content)
        } else {
          history.push('/')
          response.data.attributes.completed === true ?
            dispatch(completedTask(response.data)) :
            dispatch(updateTaskStore(response.data))
        }
        return response.data
      })
    // .catch(alert) 
  }
}

export const updateTaskStore = task => {
  return {
    type: "UPDATE_TASK",
    task
  }
}

export const completedTask = task => {
  return {
    type: "COMPLETED_TASK",
    task
  }
}

export const deleteTask = (taskId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/tasks/${taskId}`, {
      method: "DELETE",
      // headers: {
      //   "Content-Type": "application/json"
      // }
    })
      .then(resp => resp.json())
      .then(response => {
        if (response.message) {
          history.push('/')
          alert(response.message)
          dispatch(deleteTaskStore(taskId))
        } else {
          throw new Error(response.errors)
        }
      })
    // .catch(alert) 
  }
}

export const deleteTaskStore = taskId => {
  return {
    type: "DELETE_TASK",
    taskId
  }
}