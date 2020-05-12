export default (state = [], action) => {
  switch (action.type) {
    case "SET_DEPARTMENTS":
      return action.departments
    default:
      return state
  }
} 