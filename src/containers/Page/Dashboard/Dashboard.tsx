import * as React from 'react';
import { connect } from 'react-redux';
import DashboardPage from '../../../components/Page/Dashboard/DashboardPage';
// import { Route } from 'react-router-dom';

class Dashboard extends React.Component {
    render() {
        return (
            <DashboardPage>
                Dashboard
            </DashboardPage>
        );
    }
}

export default connect()(Dashboard);