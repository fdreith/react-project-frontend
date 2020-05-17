import { setUsers } from './users'

export const fetchDepartments = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/departments", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setDepartments(response.data))
          dispatch(setUsers(response.data))
        }
      })
      .catch(alert)
  }
}

export const setDepartments = departments => {
  return {
    type: "SET_DEPARTMENTS",
    departments
  }
}