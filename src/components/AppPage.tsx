import * as React from 'react';
import './AppPage.css';

class AppPage extends React.Component {
    render() {
        return (
            <>
                {this.props.children}
            </>
        );
    }
}

export default AppPage;
