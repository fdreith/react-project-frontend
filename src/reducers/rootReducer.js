import { combineReducers } from 'redux';
import currentUser from './currentUser'
import departments from './departments'
import users from './users'
import tasks from './tasks'
import comments from './comments'

export default combineReducers({
  currentUser,
  departments,
  users,
  tasks,
  comments
})