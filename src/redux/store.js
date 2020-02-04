import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //console logs to help with debugging redux code

import rootReducer from './root-reducer';

const middlewares = [logger]; //the function from redux-logger & we're putting inside our array

const store = createStore(rootReducer, applyMiddleware(...middlewares)); //...middlewares will spread all methods in logger array as individual arguments

export default store;