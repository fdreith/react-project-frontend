export default (state = [], action) => {
  switch (action.type) {
    case "SET_COMMENTS":
      return action.comments
    case "ADD_COMMENT":
      return state.concat(action.comment.data)
    case "DELETE_COMMENT":
      return state.filter(comment => parseInt(comment.id) !== action.commentId)
    default:
      return state
  }
} 