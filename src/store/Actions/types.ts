export interface ActionsState {
    [key: string]: ActionInfo;
}

export interface ActionInfo {
    name: string;
    status: ActionStatus;
    errors: string[];
    message?: string;
}

export enum ActionStatus {
    Pending = 'pending',
    InProgress = 'in-progress',
    Success = 'success',
    Fail = 'fail'
}