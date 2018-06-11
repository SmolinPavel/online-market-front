import * as React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';

import { ActionsState } from '../store/Actions/types';
import { GetUserAction } from '../store/Auth/actions';
import { getUser } from  '../store/Auth/actionCreators';
import ProtectedRoute from './Shared/ProtectedRoute';

import LayoutWithPanel from './Layouts/LayoutWithPanel';

import asyncComponent from './Shared/AsyncComponent';
const Login = asyncComponent(() =>
    import('./Page/Login/Login').then(module => module.default)
);

interface Props {
    getUser: () => GetUserAction;
}

class App extends React.Component<Props> {
    componentDidMount() {
        this.props.getUser();
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/login"  component={Login}/>
                        <ProtectedRoute path="/" component={LayoutWithPanel}/>
                        {/*<Redirect from="*" to="/dashboard" />*/}
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapDispathToProps = (dispatch: Dispatch<ActionsState>) => {
    return bindActionCreators({getUser}, dispatch);
};

export default connect(null, mapDispathToProps)(App);
