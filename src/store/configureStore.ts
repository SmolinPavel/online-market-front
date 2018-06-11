import { createStore, applyMiddleware, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import { AppState } from './types';

import { composeWithDevTools } from 'redux-devtools-extension';

import ActionsSagas from './Actions/sagas';
import AuthSagas from './Auth/sagas';

const isProduction = process.env.NODE_ENV === 'production';
const middleware: Middleware[] = [];

const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

export default function configureStore(initialState: AppState) {
    const enhancer = isProduction
        ? applyMiddleware(...middleware)
        : composeWithDevTools(applyMiddleware(...middleware));

    const store = createStore(rootReducer, initialState, enhancer);

    sagaMiddleware.run(ActionsSagas);
    sagaMiddleware.run(AuthSagas);

    return store;
}