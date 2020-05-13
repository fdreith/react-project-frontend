export const fetchDepartments = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/departments", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(resp => {
        return resp.json()
      })
      .then(response => {
        if (response.error) {
          // alert(response.error)
          console.log(response.error)
        } else {
          dispatch(setDepartments(response))
        }
      })
      .catch(console.log)
  }
}

export const setDepartments = departments => {
  return {
    type: "SET_DEPARTMENTS",
    departments
  }
}