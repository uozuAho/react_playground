import React from 'react';
import { logPureLifecycle } from '../utils/log_decorators';

@logPureLifecycle
export class LifecycleDemos extends React.PureComponent {
    public render() {
        return <h1>LifecycleDemos</h1>;
    }
}
