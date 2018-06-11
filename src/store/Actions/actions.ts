import { Action } from 'redux';

export const INIT_ACTION = 'store/actions/Init';
export const DONE_SUCCESS_ACTION = 'store/actions/DoneSuccess';
export const DONE_FAIL_ACTION = 'store/actions/DoneFail';

export interface InitAction extends Action {
    name: string;
}

export interface DoneSuccessAction extends Action {
    name: string;
    message?: string;
}

export interface DoneFailAction extends Action {
    name: string;
    errors: string[];
    message?: string;
}

export type ActionsAction = InitAction | DoneSuccessAction | DoneFailAction;