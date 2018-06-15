import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configStore } from './store/index';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { AUTHENTICATED } from 'store/types';

const state = {
    orders: [],
    specimen: { patient: {}, testDetails: {}},
    testResults: {
        fields: [],
        patient: {}
    }
};

const store = configStore(state);

const user = localStorage.getItem('user');

if(user) {
  store.dispatch({ type: AUTHENTICATED });
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root')
    );
registerServiceWorker();
