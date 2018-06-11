import * as React from 'react';

import ProtectedRoute from '../Shared/ProtectedRoute';

import { Switch } from 'react-router';
import AppPage from '../../components/AppPage';
import { NavRouter, protectedRouters } from '../../routes';

interface Props {
}

class LayoutWithPanel extends React.Component<Props> {

    render() {
        return (
            <>
                <AppPage>
                    {this.props.children}
                    <Switch>
                        {
                            protectedRouters.map((router: NavRouter, idx) => {
                                return (
                                    <ProtectedRoute
                                        key={idx}
                                        path={router.path}
                                        component={router.component}
                                    />
                                );
                            })
                        }
                    </Switch>
                </AppPage>
            </>
        );
    }
}

export default LayoutWithPanel;