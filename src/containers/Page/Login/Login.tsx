import * as React from 'react';
import { connect } from 'react-redux';
import LoginPage from '../../../components/Page/Login/LoginPage';
// import { Route } from 'react-router-dom';

class Login extends React.Component {

    render() {
        return (
            <LoginPage>
                Login
            </LoginPage>
        );
    }
}

export default connect()(Login);