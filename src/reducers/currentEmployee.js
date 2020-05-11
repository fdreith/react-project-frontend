export default (state = [], action) => {
  switch (action.type) {
    case "SET_CURRENT_EMPLOYEE":
      return action.employee
    default:
      return state
  }
} 