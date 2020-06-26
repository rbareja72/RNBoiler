import * as reducers from './ApplicationReducers';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [
  thunk,
];
if (__DEV__) {
  middlewares.push(logger);
}
const enhancer = compose(applyMiddleware(...middlewares));
const store = createStore(combineReducers(reducers), enhancer);

export default store;

