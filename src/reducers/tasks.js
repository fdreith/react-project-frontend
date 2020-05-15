export default (state = {
  myTasks: [{
    id: "",
    type: "",
    attributes: { id: "", content: "", due_date: "", completed: "", comments: [] }, user: "", owner: ""
  }], assignedTasks: [{
    id: "",
    type: "",
    attributes: { id: "", content: "", due_date: "", completed: "", comments: [] }, user: "", owner: ""
  }]
}, action) => {

  switch (action.type) {
    case 'SET_TASKS':
      const assignedTasks = convertDates(action.tasks.filter(task => task.type === "assigned_task").filter(task => task.relationships.user.data.id !== task.relationships.owner.data.id))
      const myTasks = convertDates(action.tasks.filter(task => task.type === "task"))
      return { myTasks, assignedTasks }
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