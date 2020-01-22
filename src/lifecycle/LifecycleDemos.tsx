import React from 'react';

export class LifecycleDemos extends React.PureComponent {
    constructor(props: any) {
        super(props);
        this.log('constructor');
    }

    public render() {
        // todo: lifecycle decorator
        this.log('render');
        return <h1>LifecycleDemos</h1>;
    }

    public componentDidMount() {
        this.log('componentDidMount');
    }

    public componentWillUnmount() {
        this.log('componentWillUnmount');
    }

    public componentDidUpdate() {
        this.log('componentDidUpdate');
    }

    private log(message: string) {
        console.log('LifecycleDemos: ' + message);
    }
}
