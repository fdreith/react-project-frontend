export default (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      debugger
      return action.user
    case "CLEAR_CURRENT_USER":
      return null
    default:
      return state
  }
} 