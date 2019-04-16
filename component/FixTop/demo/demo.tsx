import React from 'react';
import { FixTop } from '@component/index';
const Demo = () => {
    return (
        <div className="FixTop">
            <FixTop>children</FixTop>
            <FixTop prop={'Hello World'}>children</FixTop>
        </div>
    );
};

export default Demo;
