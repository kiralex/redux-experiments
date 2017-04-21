import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers/index';
import StateInvarient from 'redux-immutable-state-invariant';
import throttle from 'lodash/throttle';

function loadState() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
}

const persistedState = loadState();

const middleware = process.env.NODE_ENV !== 'production'
  ? [StateInvarient()]
  : [];

const ehancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(
  rootReducer,
  persistedState,
  ehancers,
  applyMiddleware(...middleware),
);

//Add hot realoding reducers
if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos,
  });
}, 1000));

export default store;
