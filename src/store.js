import {applyMiddleware, createStore, compose } from 'redux';
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

const ehancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, ehancers, applyMiddleware(...middleware));

//Add hot realoding reducers
if(module.hot){
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  })
}

export default store;
