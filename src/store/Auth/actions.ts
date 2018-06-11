import User from './models/user';

import { Action } from 'redux';

export const LOGIN = 'store/user/login';
export const LOGOUT = 'store/user/logout';
export const GET_USER = 'store/user/getUser';
export const SET_USER = 'store/user/setUser';

export type GetUserAction = Action;

export interface SetUserAction extends Action {
    user: User;
}

type LogoutAction = Action;
type LoginAction = Action;

export type AuthAction = GetUserAction | SetUserAction | LogoutAction | LoginAction;