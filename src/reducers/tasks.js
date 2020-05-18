export default (state = {
  myTasks: [], assignedTasks: [], completedTasks: []
}, action) => {

  const isMyTask = (taskOrTaskId) => {
    if (taskOrTaskId.task) {
      return taskOrTaskId.task.attributes.user.id === taskOrTaskId.task.attributes.owner.id
    } else {
      return state.myTasks.find(task => parseInt(task.id) === taskOrTaskId)
    }
  }

  switch (action.type) {
    case 'SET_TASKS':
      const tasks = convertDates(action.tasks)
      const assignedTasks = tasks.filter(task => task.type === "assigned_task")
        .filter(task => task.relationships.user.data.id !== task.relationships.owner.data.id)
        .filter(task => task.attributes.completed === false)
      const myTasks = tasks.filter(task => task.type === "task")
        .filter(task => task.attributes.completed === false)
      const completedTasks = tasks.filter(task => task.attributes.completed === true)
        .filter(task => task.type === "task")
      return { myTasks, assignedTasks, completedTasks }
    case 'ADD_TASK':
      if (isMyTask(action)) {
        return { ...state, myTasks: [...state.myTasks, action.task] }
      } else {
        return { ...state, assignedTasks: [...state.assignedTasks, action.task] }
      }
    case 'UPDATE_TASK':
      const convertedTask = convertDates(action)
      if (isMyTask(action.task.attributes.id)) {
        const myTasks = state.myTasks.map(task => replaceIfEqual(task, convertedTask.task))
        return { ...state, myTasks }
      } else {
        const assignedTasks = state.assignedTasks.map(task => replaceIfEqual(task, convertedTask.task))
        return { ...state, assignedTasks }
      }
    case 'COMPLETED_TASK':
      if (isMyTask(action.task.attributes.id)) {
        const myTasks = state.myTasks.filter(task => task.id !== action.task.id)
        const completedTasks = [...state.completedTasks, action.task]
        return { ...state, myTasks, completedTasks }
      } else {
        const assignedTasks = state.assignedTasks.filter(task => task.id !== action.task.id)
        return { ...state, assignedTasks }
      }
    case 'DELETE_TASK':
      if (isMyTask(action.taskId)) {
        const myTasks = state.myTasks.filter(task => parseInt(task.id) !== action.taskId)
        return { ...state, myTasks }
      } else {
        const assignedTasks = state.assignedTasks.filter(task => parseInt(task.id) !== action.taskId)
        return { ...state, assignedTasks }
      }
    default:
      return state
  }
}

const replaceIfEqual = (task, actionTask) => {
  if (task.id === actionTask.id) {
    return actionTask
  } else {
    return task
  }
}

const convertDates = (tasks) => {
  if (Array.isArray(tasks)) {
    return tasks.map(task => {
      task.attributes.due_date = new Date(task.attributes.due_date)
      return task
    })
  } else {
    tasks.task.attributes.due_date = new Date(tasks.task.attributes.due_date)
    return tasks
  }

}
