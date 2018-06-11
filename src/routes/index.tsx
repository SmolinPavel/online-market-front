import asyncComponent from '../containers/Shared/AsyncComponent';
import * as React from 'react';

const Dashboard = asyncComponent(() =>
    import('../containers/Page/Dashboard/Dashboard').then(module => module.default)
);

const Profile = asyncComponent(() =>
    import('../containers/Page/Profile/Profile').then(module => module.default)
);

export interface NavRouter {
  path: string;
  component:  React.ComponentClass;
  exact?: boolean;
}

export const publicRouters: NavRouter[] = [
    { path: '/home', component: Dashboard, exact: true },
];

export const protectedRouters: NavRouter[] = [
    { path: '/dashboard', component: Dashboard, exact: true },
    { path: '/profile', component: Profile, exact: true }
];