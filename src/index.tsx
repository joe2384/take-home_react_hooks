import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store/store';

const rootElement = document.getElementById('root')

const Style: any = {
  wrapper:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
};

ReactDOM.render(
  <Provider store={store}>
    <div style={Style.wrapper}>
      <App />
    </div>
  </Provider>,
  rootElement
)

serviceWorker.register();
