import * as React from 'react';
import { Route } from 'react-router';
// import * as authHelper from '../../helpers/authHelper';
import { AppState } from '../../store/types';
import { connect, Dispatch } from 'react-redux';
import { logout } from '../../store/Auth/actionCreators';
import { isAuthenticated, isInitialized } from '../../store/Auth/selectors';
import { bindActionCreators } from 'redux';
import { NavRouter } from '../../routes';

interface Props extends NavRouter {
    component: React.ComponentClass;
    isAuth: boolean;
    isInit: boolean;
    logout: () => any;
}

class ProtectedRoute extends React.Component<Props> {
    render() {
        const {component: Component, isAuth, isInit, ...rest} = this.props;

        // Todo change after implementation of auth
        // if (!isAuth) {
        //     if (isInit) {
        //         authHelper.redirectToLogin();
        //     }
        // } else {
        //     return (
        //         <Route
        //             {...rest}
        //             render={(props) => (
        //                 <Component {...props} />
        //             )}
        //         />
        //     );
        // }

        return (
            <Route
                {...rest}
                render={(props) => (
                    <Component {...props} />
                )}
            />);
    }
}

const mapStateToProps = (state: AppState) => ({
    isAuth: isAuthenticated(state),
    isInit: isInitialized(state)
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {
    return bindActionCreators({logout}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(ProtectedRoute);
