// import * as React from 'react';

// import { toast } from 'react-toastify';

import { all, takeLatest } from 'redux-saga/effects';
import { DONE_FAIL_ACTION, DONE_SUCCESS_ACTION, DoneFailAction, DoneSuccessAction } from './actions';
// import ErrorToast from '../../components/Shared/toastify/ErrorToast';

// const toastSettings = {
//     position: toast.POSITION.TOP_RIGHT,
//     hideProgressBar: true,
// };

function* doneSuccess(action: DoneSuccessAction) {
    if (action.message) {
        // yield toast.success(action.message, toastSettings);
        yield console.log('success');
    }
}

function* doneFail(action: DoneFailAction) {
    if (action.message) {
        yield console.log('fail');
    }
}

function* watchDoneSuccess() {
    yield takeLatest(DONE_SUCCESS_ACTION, doneSuccess);
}

function* watchDoneFail() {
    yield takeLatest(DONE_FAIL_ACTION, doneFail);
}

export default function* root() {
    yield all([
        watchDoneSuccess(), watchDoneFail()
    ]);
}