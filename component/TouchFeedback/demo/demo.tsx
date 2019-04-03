import React from 'react';
import { TouchFeedback } from '@component/index';
const Demo = () => {
    return (
        <div className="TouchFeedback">
            <TouchFeedback _activeStyle={{ background: 'yellow' }} _activeClassName="touchFeedback-active">
                <p>TouchFeedback</p>
            </TouchFeedback>

            <TouchFeedback _disabled _activeStyle={{ background: 'yellow' }} _activeClassName="touchFeedback-active">
                <p>TouchFeedback disabled</p>
            </TouchFeedback>
        </div>
    );
};

export default Demo;
