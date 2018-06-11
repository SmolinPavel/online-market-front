import { DONE_FAIL_ACTION, DONE_SUCCESS_ACTION, INIT_ACTION } from './actions';

export const initAction = (name: string) => ({
    type: INIT_ACTION,
    name
});

export const doneActionSuccess = (name: string, message?: string) => ({
    type: DONE_SUCCESS_ACTION,
    name, message
});

export const doneActionFail = (name: string, errors: string[], message?: string) => ({
    type: DONE_FAIL_ACTION,
    name, errors, message
});