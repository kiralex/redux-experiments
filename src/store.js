import {applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/index';
import StateInvarient from 'redux-immutable-state-invariant';

const defaultState = {
  todos: [
    { id: 0, completed: false, text: 'faire la vaisselle' },
    {
      id: 1,
      completed: true,
      text: 'faire le ménage',
    },
  ],
  filters: 'rien...'
};

const middleware = process.env.NODE_ENV !== 'production' ?
  [StateInvarient()] :
  [];

const store = createStore(rootReducer, defaultState, applyMiddleware(...middleware));
export default store;
