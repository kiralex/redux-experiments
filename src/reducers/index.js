import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import filters from './filters';
import todos from './todos';

const rootReducer = combineReducers( {todos, filters, routing: routerReducer});

export default rootReducer;
