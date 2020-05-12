import { combineReducers } from 'redux';
import currentUser from './currentUser'
import departments from './departments'
import users from './users'

export default combineReducers({
  currentUser,
  departments,
  users
})