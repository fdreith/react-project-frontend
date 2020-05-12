import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser'


const reducer = combineReducers({
  currentUser
})

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));

export default store