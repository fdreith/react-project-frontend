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
      const assignedTasks = tasks.filter(task => task.type === "assigned_task")
        .filter(task => task.relationships.user.data.id !== task.relationships.owner.data.id)
        .filter(task => task.attributes.completed === false)
      const myTasks = tasks.filter(task => task.type === "task")
        .filter(task => task.attributes.completed === false)
      const completedTasks = tasks.filter(task => task.attributes.completed === true)
        .filter(task => task.type === "task")
      return { myTasks, assignedTasks, completedTasks }
    case 'ADD_TASK':
      const newTask = convertDates(action.task)
      if (isMyTask(action.task)) {
        return { ...state, myTasks: [...state.myTasks, newTask] }
      } else {
        return { ...state, assignedTasks: [...state.assignedTasks, newTask] }
      }
    case 'UPDATE_TASK':
      const convertedTask = convertDates(action.task)
      if (isInMyTaskState(action.task.attributes.id)) {
        if (isMyTask(action.task)) {
          const myTasks = state.myTasks.map(task => replaceIfEqual(task, convertedTask))
          return { ...state, myTasks }
        } else {
          const newMyTasks = state.myTasks.filter(task => parseInt(task.id) !== action.task.attributes.id)
          return { ...state, myTasks: newMyTasks, assignedTasks: [...state.assignedTasks, convertedTask] }
        }
      } else {
        if (isMyTask(action.task)) {
          const newAssignedTasks = state.assignedTasks.filter(task => parseInt(task.id) !== action.task.attributes.id)
          return { ...state, myTasks: [...state.myTasks, convertedTask], assignedTasks: newAssignedTasks }
        }
        else {
          const assignedTasks = state.assignedTasks.map(task => replaceIfEqual(task, convertedTask))
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
    case 'UPDATE_PRIORITY':
      const prioritizedTask = updatePriority(action.task.task, action.task.counter)
      if (isInMyTaskState(action.task.task.attributes.id)) {
        const myTasks = state.myTasks.map(task => {
          return replaceIfEqual(task, prioritizedTask)
        })
        return { ...state, myTasks }
      } else {
        const assignedTasks = state.assignedTasks.map(task => {
          return replaceIfEqual(task, prioritizedTask)
        })
        return { ...state, assignedTasks }
      }
    default:
      return state
  }
}

const updatePriority = (task, counter) => {
  task.attributes.priority = counter + 1
  return task
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
    tasks.attributes.due_date = new Date(tasks.attributes.due_date)
    return tasks
  }

}
