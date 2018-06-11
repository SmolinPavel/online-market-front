import { createSelector } from 'reselect';
import { AuthState } from './types';
import { AppState } from '../types';
import { initialState } from './constants';

export const getAuthState = (state: AppState): AuthState => state.auth || initialState;

export const isAuthenticated = createSelector(
    getAuthState,
    (state: AuthState) => {
        return !!state.user && state.user.hasOwnProperty('email') &&
            (!state.user.hasOwnProperty('is_authenticated') || state.user.is_authenticated);
    }
);

export const isInitialized = createSelector(
    getAuthState,
    (state: AuthState) => {
        return state.isInitialized;
    }
);

export const getUser = createSelector(
    getAuthState,
    (state: AuthState) => state.user
);