import * as React from 'react';

interface State {
    Component: React.ComponentClass | null;
}

export default function asyncComponent(getComponent: Function) {
    class AsyncComponent extends React.Component<{}, State>  {
        static Component: React.ComponentClass | null = null;

        state = { Component: AsyncComponent.Component };

        componentWillMount() {
            if (!this.state.Component) {
                getComponent().then((Component: React.ComponentClass) => {
                    AsyncComponent.Component = Component;
                    this.setState({ Component });
                });
            }
        }
        render() {
            const { Component } = this.state;
            if (Component) {
                return <Component {...this.props} />;
            }
            return null;
        }
    }
    return AsyncComponent;
}