export default (state = {
  myTasks: [
    // {
    // id: "",
    // type: "",
    // attributes: { id: "", content: "", due_date: "", completed: "", comments: [] }, user: "", owner: ""
    // }
  ], assignedTasks: [], allTasks: []
}, action) => {

  switch (action.type) {
    case 'SET_TASKS':
      const tasks = convertDates(action.tasks)
      const assignedTasks = tasks.filter(task => task.type === "assigned_task").filter(task => task.relationships.user.data.id !== task.relationships.owner.data.id)
      const myTasks = tasks.filter(task => task.type === "task")
      return { myTasks, assignedTasks }
    case 'ADD_TASK':
      if (myTasks(action)) {
        return { ...state.myTasks, ...action.task }
      } else {
        return { ...state.assignedTasks, ...action.task }
      }
    case 'UPDATE_TASK':
      debugger
      if (myTasks(action)) {
        return state.myTasks.map(task => {
          if (task.id === action.task.id) {
            return action.task
          } else {
            return task
          }
        })
      } else {
        return state.assignedTasks.map(task => {
          if (task.id === action.task.id) {
            return action.task
          } else {
            return task
          }
        })
      }

    case 'DELETE_TASK':
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

const myTasks = (action) => {
  return action.task.relationships.user.data.id === action.task.relationships.owner.data.id
}