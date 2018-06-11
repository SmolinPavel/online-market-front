import User from './models/user';
import {
    GET_USER, LOGIN, LOGOUT, SET_USER
} from './actions';

export const getUser = () => ({
    type: GET_USER
});

export const setUser = (user: User) => ({
    type: SET_USER,
    user
});

export const logout = () => ({
    type: LOGOUT
});

export const login = () => ({
    type: LOGIN
});