import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser'


const reducer = combineReducers({
  currentUser
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