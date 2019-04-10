import React, { Fragment } from 'react';
import { Portal } from '@component/index';
const Demo = () => {
    return (
        <div className="Portal">
            <Portal>
                <Fragment>
                    <h1>Portal</h1>
                    <h1>Portal</h1>
                </Fragment>
            </Portal>
            <Portal mountNode={document.querySelector('.none')!}>none</Portal>
        </div>
    );
};

export default Demo;
