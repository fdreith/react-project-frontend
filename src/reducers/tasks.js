export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_TASKS':
      const assignedTasks = action.tasks.filter(task => task.type === "assigned_task")
      const myTasks = action.tasks.filter(task => task.type === "task")
      return { myTasks, assignedTasks }
    case 'ADD_TASK':
      return [...state, action.task]
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.id)
    default:
      return state
  }
}