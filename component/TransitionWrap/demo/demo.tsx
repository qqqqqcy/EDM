import React from 'react';
import { TransitionWrap } from '@component/index';
const Demo = () => {
    return (
        <div className="TransitionWrap">
            <TransitionWrap>
                <h1>hello</h1>
            </TransitionWrap>
            {/* <TransitionWrap _prop={'Hello World'} /> */}
        </div>
    );
};

export default Demo;
