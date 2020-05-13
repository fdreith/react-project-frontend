export default function manageTasks(state = [], action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.task]
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.id)
    default:
      return state
  }
}