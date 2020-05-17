export const postComment = comment => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(comment)
    })
      .then(resp => resp.json())
      .then(response => {
        debugger
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(addComment(response))
        }
      })
    // .catch(alert) 
  }
}

export const addComment = comment => {
  return {
    type: "ADD_COMMENT",
    comment
  }
}