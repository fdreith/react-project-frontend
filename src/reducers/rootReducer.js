import { combineReducers } from 'redux';
import currentUser from './currentUser'
import departments from './departments'
import users from './users'
import tasks from './tasks'

export default combineReducers({
  currentUser,
  departments,
  users,
  tasks
})