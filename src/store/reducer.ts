import { combineReducers } from 'redux';

import { actionsReducer } from './Actions/reducer';
import { authReducer } from './Auth/reducer';

export default combineReducers({
    actions: actionsReducer,
    auth: authReducer,
});