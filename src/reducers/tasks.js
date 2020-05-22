export default (state = {
  myTasks: [], assignedTasks: [], completedTasks: []
}, action) => {

  const isMyTask = (task) => {
    return task.attributes.user.id === task.attributes.owner.id
  }

  const isInMyTaskState = taskId => {
    return state.myTasks.find(task => parseInt(task.id) === taskId)
  }

  switch (action.type) {
    case 'SET_TASKS':
      const tasks = convertDates(action.tasks)
      const assignedTasks = sortByDate(tasks.filter(task => task.type === "assigned_task")
        .filter(task => task.relationships.user.data.id !== task.relationships.owner.data.id)
        .filter(task => task.attributes.completed === false))
      const myTasks = sortByDate(tasks.filter(task => task.type === "task")
        .filter(task => task.attributes.completed === false))
      const completedTasks = sortByDate(tasks.filter(task => task.attributes.completed === true)
        .filter(task => task.type === "task"))
      return { myTasks, assignedTasks, completedTasks }
    case 'ADD_TASK':
      const newTask = convertDates(action.task)
      if (isMyTask(action.task)) {
        const myTasks = sortByDate([...state.myTasks, newTask])
        return { ...state, myTasks }
      } else {
        const assignedTasks = sortByDate([...state.assignedTasks, newTask])
        return { ...state, assignedTasks }
      }
    case 'UPDATE_TASK':
      const convertedTask = convertDates(action.task)
      if (isInMyTaskState(action.task.attributes.id)) {
        if (isMyTask(action.task)) {
          const myTasks = sortByDate(state.myTasks.map(task => replaceIfEqual(task, convertedTask)))
          return { ...state, myTasks }
        } else {
          const newMyTasks = sortByDate(state.myTasks.filter(task => parseInt(task.id) !== action.task.attributes.id))
          return { ...state, myTasks: newMyTasks, assignedTasks: [...state.assignedTasks, convertedTask] }
        }
      } else {
        if (isMyTask(action.task)) {
          const newAssignedTasks = sortByDate(state.assignedTasks.filter(task => parseInt(task.id) !== action.task.attributes.id))
          return { ...state, myTasks: [...state.myTasks, convertedTask], assignedTasks: newAssignedTasks }
        }
        else {
          const assignedTasks = sortByDate(state.assignedTasks.map(task => replaceIfEqual(task, convertedTask)))
          return { ...state, assignedTasks }
        }
      }
    case 'COMPLETED_TASK':
      if (isInMyTaskState(action.task.attributes.id)) {
        const myTasks = state.myTasks.filter(task => task.id !== action.task.id)
        const completedTasks = [...state.completedTasks, action.task]
        return { ...state, myTasks, completedTasks }
      } else {
        const assignedTasks = state.assignedTasks.filter(task => task.id !== action.task.id)
        return { ...state, assignedTasks }
      }
    case 'DELETE_TASK':
      if (isInMyTaskState(action.taskId)) {
        const myTasks = state.myTasks.filter(task => parseInt(task.id) !== action.taskId)
        return { ...state, myTasks }
      } else {
        const assignedTasks = state.assignedTasks.filter(task => parseInt(task.id) !== action.taskId)
        return { ...state, assignedTasks }
      }
    // case 'UPDATE_PRIORITY':
    //   const updatePriority = { priority: action.task.counter + 1 }
    //   const prioritizedTask = { ...action.task.task, ...updatePriority }
    //   if (isInMyTaskState(action.task.task.attributes.id)) {
    //     const myTasks = state.myTasks.map(task => {
    //       return replaceIfEqual(task, prioritizedTask)
    //     })
    //     return { ...state, myTasks }
    //   } else {
    //     const assignedTasks = state.assignedTasks.map(task => {
    //       return replaceIfEqual(task, prioritizedTask)
    //     })
    //     return { ...state, assignedTasks }
    //   }
    default:
      return state
  }
}

const replaceIfEqual = (task, actionTask) => {
  if (task.attributes.id === actionTask.attributes.id) {
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
