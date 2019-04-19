import React from 'react';
import { Tabs, Tab, TabContainer, TabsGroup } from '../index';
const Demo = () => {
    return (
        <div className="Tabs">
            <Tabs>children</Tabs>
            <Tabs prop={'Hello World'}>children</Tabs>
        </div>
    );
};

export default Demo;
