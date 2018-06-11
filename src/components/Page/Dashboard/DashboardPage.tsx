import * as React from 'react';

interface Props {}

const DashboardPage: React.SFC<Props> = (props) => (
    <>
        {props.children}
    </>
);

export default DashboardPage;