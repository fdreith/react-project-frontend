export default (state = [], action) => {
  switch (action.type) {
    case "SET_USERS":
      const users = action.departments.map(department => department.attributes.users).flat()
      return users
    default:
      return state
  }
} 