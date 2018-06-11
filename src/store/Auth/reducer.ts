import { AuthState } from './types';

import {
    GET_USER, SET_USER,
    AuthAction, SetUserAction, LOGOUT, LOGIN
} from './actions';
import { initialState } from './constants';
import * as authHelper from '../../helpers/authHelper';

export const authReducer = (state: AuthState = initialState, action: AuthAction) => {
    switch (action.type) {
        case LOGIN:
            authHelper.redirectToLogin();
            return state;
        case LOGOUT:
            authHelper.redirectToLogout();
            return initialState;
        case GET_USER:
            return state;
        case SET_USER:
            return {
                ...state,
                user: (<SetUserAction> action).user,
                isInitialized: true
            };
        default:
            return state;
    }
};