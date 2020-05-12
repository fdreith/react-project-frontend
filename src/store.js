import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import currentEmployee from './reducers/currentEmployee'
import currentSupervisor from './reducers/currentSupervisor'
import loginForm from './reducers/loginForm'


const reducer = combineReducers({
  currentEmployee,
  currentSupervisor,
  loginForm
})

// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(thunk),
//   // other store enhancers if any
// ));


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store