export default (state = {
  myTasks: [], assignedTasks: [], completedTasks: []
}, action) => {

  switch (action.type) {
    case 'SET_TASKS':
      const tasks = convertDates(action.tasks)
      const assignedTasks = tasks.filter(task => task.type === "assigned_task")
        .filter(task => task.relationships.user.data.id !== task.relationships.owner.data.id)
        .filter(task => task.attributes.completed === false)
      const myTasks = tasks.filter(task => task.type === "task")
        .filter(task => task.attributes.completed === false)
      const completedTasks = myTasks.filter(task => task.attributes.completed === true)
      return { myTasks, assignedTasks, completedTasks }
    case 'ADD_TASK':
      if (isMyTasks(action)) {
        return { ...state, myTasks: [...state.myTasks, action.task] }
      } else {
        return { ...state, assignedTasks: [...state.assignedTasks, action.task] }
      }
    case 'UPDATE_TASK':
      if (isMyTasks(action)) {
        const newMyTasksState = state.myTasks.map(task => {
          if (task.id === action.task.id) {
            return action.task
          } else {
            return task
          }
        })
        return { ...state, myTasks: newMyTasksState }
      } else {
        const newAssignedTasksState = state.assignedTasks.map(task => {
          if (task.id === action.task.id) {
            return action.task
          } else {
            return task
          }
        })
        return { ...state, assignedTasks: newAssignedTasksState }
      }
    case 'COMPLETED_TASK':
      if (isMyTasks(action)) {
        const myTasks = state.myTasks.filter(task => task.id !== action.task.id)
        const completedTasks = [...state.completedTasks, action.task]
        return { ...state, myTasks, completedTasks }
      } else {
        const assignedTasks = state.assignedTasks.filter(task => task.id !== action.task.id)
        return { ...state, assignedTasks }
      }
    case 'DELETE_TASK':
      if (state.myTasks.find(task => task.attributes.id === action.taskId)) {
        const newMyTasks = state.myTasks.filter(task => parseInt(task.id) !== action.taskId)
        return { ...state, myTasks: newMyTasks }
      } else {
        const newAssignedTasks = state.assignedTasks.filter(task => parseInt(task.id) !== action.taskId)
        return { ...state, assignedTasks: newAssignedTasks }
      }
    default:
      return state
  }
}

const convertDates = (tasks) => {
  return tasks.map(task => {
    task.attributes.due_date = new Date(task.attributes.due_date)
    return task
  })
}

const isMyTasks = (action) => {
  return action.task.relationships.user.data.id === action.task.relationships.owner.data.id
}