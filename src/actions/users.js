export const fetchUsers = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/users", {
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
          dispatch(setUsers(response))
          // dispatch(getMyTasks())
        }
      })
      .catch(console.log)
  }
}

export const setUsers = users => {
  return {
    type: "SET_USERS",
    users
  }
}