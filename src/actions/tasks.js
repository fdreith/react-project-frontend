
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
        if (response.error) {
          alert(response.error)
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

export const deleteTask = task => {
  return {
    type: "DELETE_TASK",
    task
  }
}