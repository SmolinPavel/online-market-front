import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { unregister } from './registerServiceWorker';
import './index.scss';
import App from './containers/App';

import configureStore from './store/configureStore';
const store = configureStore({});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
unregister();