import React from 'react';
import ReactDom from 'react-dom';

import App from './component/App';
import '../public/index.css';

import { Provider} from 'react-redux';
import store from './store';

const app = (
  <Provider store={store}>
    <App />
  </Provider>

);

ReactDom.render(app, document.getElementById('root'));
