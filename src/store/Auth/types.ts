import User from './models/user';

export interface AuthState {
    isInitialized: boolean;
    user?: User;
}

export enum UserType {
    Standard = 'standard',
    Adhoc = 'adhoc',
    Api = 'api'
}

export enum UserStatus {
    Pending = 'pending',
    Active = 'active',
    Suspended = 'suspended'
}