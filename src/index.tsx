import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store/store';

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

serviceWorker.register();
