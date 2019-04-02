import React from 'react';
import { NAME } from '@component/index';
const Demo = () => {
    return (
        <div className="NAME">
            <NAME />
            <NAME _prop={'Hello World'} />
        </div>
    );
};

export default Demo;
