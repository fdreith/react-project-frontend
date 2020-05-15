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
      const allTasks = action.tasks
      const assignedTasks = action.tasks.filter(task => task.type === "assigned_task").filter(task => task.relationships.user.data.id !== task.relationships.owner.data.id)
      const myTasks = action.tasks.filter(task => task.type === "task")
      console.log(assignedTasks)
      return { myTasks, assignedTasks, allTasks }
    case 'ADD_TASK':
      debugger
      if (action.task.relationships.user.data.id === action.task.relationships.owner.data.id) {
        return { ...state.myTasks, ...action.task }
      } else {
        return { ...state.assignedTasks, ...action.task }
      }
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.id)
    default:
      return state
  }
}

const convertDates = (tasks) => {
  tasks.map(task => task.attributes.due_date = new Date(task.attributes.due_date))
}