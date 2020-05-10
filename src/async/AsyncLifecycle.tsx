import React from 'react';
import { logPureLifecycle } from '../utils/log_decorators';

/**
 * I can't remember what I was trying to do here. Probably trying
 * to figure out what happened when you made react's lifecycle
 * methods async
 */
@logPureLifecycle
export class AsyncLifecycleDemo extends React.PureComponent {
    public render() {
        return <h1>LifecycleDemos</h1>;
    }
}
