export default (state = [], action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return action.tasks
    case 'ADD_TASK':
      return [...state, action.task]
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.id)
    default:
      return state
  }
}