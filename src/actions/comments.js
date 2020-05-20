export const fetchComments = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/comments", {
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
          dispatch(setComments(response.data))
        }
      })
      .catch(alert)
  }
}

export const setComments = comments => {
  return {
    type: "SET_COMMENTS",
    comments
  }
}

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
        if (response.content) {
          alert(response.content)
        } else {
          dispatch(addComment(response))
        }
      })
      .catch(alert)
  }
}

export const addComment = comment => {
  return {
    type: "ADD_COMMENT",
    comment
  }
}

export const deleteComment = (commentId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/comments/${commentId}`, {
      method: "DELETE",
    })
      .then(resp => resp.json())
      .then(response => {
        if (response.message) {
          // alert(response.message)
          dispatch(deleteCommentStore(commentId))
        } else {
          throw new Error(response.errors)
        }
      })
      .catch(alert)
  }
}

export const deleteCommentStore = commentId => {
  return {
    type: "DELETE_COMMENT",
    commentId
  }
}