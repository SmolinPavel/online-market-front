import { AuthState } from './Auth/types';
import { ActionsState } from './Actions/types';

export interface AppState {
    actions?: ActionsState;
    auth?: AuthState;
}