export const setCurrentEmployee = employee => {
  return {
    type: "SET_CURRENT_EMPLOYEE",
    employee
  }
}

export const login = (credentials, history) => {

  // return dispatch => {
  return fetch("http://localhost:3001/api/v1/employees/login", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
    .then(resp => resp.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        debugger
        // dispatch(setCurrentEmployee(response.data))
        // dispatch(getMyTasks)
        console.log("signed in!")
        history.pushState("/")
      }
    })
  // .catch(alert) 
  // }
}

export const getCurrentEmployee = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/employees/get_current_employee")
  }
}