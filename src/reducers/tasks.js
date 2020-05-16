export default (state = {
  myTasks: [
    // {
    // id: "",
    // type: "",
    // attributes: { id: "", content: "", due_date: "", completed: "", comments: [] }, user: "", owner: ""
    // }
  ], assignedTasks: []
}, action) => {

  switch (action.type) {
    case 'SET_TASKS':
      const tasks = convertDates(action.tasks)
      const assignedTasks = tasks.filter(task => task.type === "assigned_task").filter(task => task.relationships.user.data.id !== task.relationships.owner.data.id)
      const myTasks = tasks.filter(task => task.type === "task")
      return { myTasks, assignedTasks }
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

    case 'DELETE_TASK':
      debugger
      return state.filter(task => task.id !== action.id)
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