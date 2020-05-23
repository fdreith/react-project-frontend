export default (state = [], action) => {

  switch (action.type) {
    case 'SET_TASKS':
      const tasks = action.tasks.filter((task, index, self) =>
        index === self.findIndex((t) => {
          return t.attributes.id === task.attributes.id
        })
      )
      const convertedTasks = convertDates(tasks)
      const sortedTasks = sortByDate(convertedTasks)
      return sortedTasks
    case 'ADD_TASK':
      const newTask = convertDates(action.task)
      const newTasks = sortByDate([...state, newTask])
      return newTasks
    case 'UPDATE_TASK':
      const convertedTask = convertDates(action.task)
      const updatedTasks = sortByDate(state.map(task => {
        if (task.attributes.id === convertedTask.attributes.id) {
          return convertedTask
        } else {
          return task
        }
      }))
      return updatedTasks
    case 'DELETE_TASK':
      const filteredTasks = state.filter(task => parseInt(task.id) !== action.taskId)
      return filteredTasks
    default:
      return state
  }
}

const convertDates = (tasks) => {
  if (Array.isArray(tasks)) {
    return tasks.map(task => {
      task.attributes.due_date = new Date(task.attributes.due_date)
      return task
    })
  } else {
    tasks.attributes.due_date = new Date(tasks.attributes.due_date)
    return tasks
  }
}

const sortByDate = (tasks) => {
  return tasks.sort(function (a, b) {
    const dueDateA = a.attributes.due_date
    const dueDateB = b.attributes.due_date
    if (dueDateA < dueDateB) {
      return -1
    }
    if (dueDateA > dueDateB) {
      return 1
    }
    return 0
  })
}
