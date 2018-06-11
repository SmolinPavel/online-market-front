import { put, all, takeLatest } from 'redux-saga/effects';

import * as userApi from '../../api/user';
import {
    GET_USER, GetUserAction,
} from './actions';
import { doneActionFail, doneActionSuccess, initAction } from '../Actions/actionCreators';
import { setUser } from './actionCreators';

function* getUser(action: GetUserAction) {
    try {
        yield put(initAction(action.type));

        const user = yield userApi.getInfo();
        yield put(setUser(user));

        yield put(doneActionSuccess(action.type));
    } catch (errors) {
        yield put(doneActionFail(action.type, errors));
    }
}

function* watchGetUser() {
    yield takeLatest(GET_USER, getUser);
}

export default function* root() {
    yield all([
        watchGetUser()
    ]);
}