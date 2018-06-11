import { ActionsState, ActionStatus } from './types';
import {
    ActionsAction,
    DONE_FAIL_ACTION, DONE_SUCCESS_ACTION, INIT_ACTION
} from './actions';

const initialState: ActionsState = {};

export const actionsReducer = (state: ActionsState = initialState, action: ActionsAction) => {
    switch (action.type) {
        case INIT_ACTION:
            return {
                ...state,
                [action.name]: {
                    ...action,
                    status: ActionStatus.InProgress,
                    errors: []
                }
            };
        case DONE_SUCCESS_ACTION:
            return {
                ...state,
                [action.name]: {
                    ...action,
                    status: ActionStatus.Success,
                    errors: []
                }
            };
        case DONE_FAIL_ACTION:
            return {
                ...state,
                [action.name]: {
                    ...action,
                    status: ActionStatus.Fail
                }
            };
        default:
            return state;
    }
};