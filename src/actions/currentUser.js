import { fetchUsers } from "./users.js"
import { fetchTasks } from "./tasks.js"

export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

export const login = (credentials, history) => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(resp => resp.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          // debugger
          dispatch(setCurrentUser(response))
          dispatch(fetchUsers())
          dispatch(fetchTasks())
          console.log("signed in!")
          // history.pushState("/")
        }
      })
    // .catch(alert) 
  }
}

export const signUp = (credentials, history) => {
  debugger
  return dispatch => {
    const userInfo = {
      user: credentials
    }
    return fetch("http://localhost:3001/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          debugger
          dispatch(setCurrentUser(response))
          dispatch(fetchUsers())
          dispatch(fetchTasks())
          // history.push('/')
        }
      })
      .catch(console.log)
  }
}


export const logout = event => {
  return dispatch => {
    dispatch(clearCurrentUser())
    // dispatch(clearTasks())
    return fetch('http://localhost:3001/api/v1/logout', {
      credentials: "include",
      method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
      credentials: "include",
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
          dispatch(setCurrentUser(response))
          dispatch(fetchUsers())
          dispatch(fetchTasks())
        }
      })
      .catch(console.log)
  }
}

