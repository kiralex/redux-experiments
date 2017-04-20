import { createStore } from 'redux';

import rootReducer from './reducers/index';

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
const store = createStore(rootReducer, defaultState);
export default store;
