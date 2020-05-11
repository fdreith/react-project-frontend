import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import currentEmployee from './reducers/currentEmployee'
import currentSupervisor from './reducers/currentSupervisor'


const reducer = combineReducers({
  currentEmployee,
  currentSupervisor
})

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store