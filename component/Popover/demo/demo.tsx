import React from 'react';
import { Popover } from '@component/index';
const Demo = () => {
    return (
        <div className="Popover">
            <Popover>children</Popover>
            <Popover _prop={'Hello World'}>children</Popover>
        </div>
    );
};

export default Demo;
