import React from 'react';
import { Icon } from '@src/index';

const Demo = () => {
    return (
        <div>
            <div style={{ background: 'gainsboro' }}>
                <Icon fill="red" value="addcart" />
                <Icon fill="blue" value="addcart2" />
                <Icon fill="green" value="addcart" />
                <Icon fill="red" value="close" />
                <Icon fill="blue" value="remind" />
                <Icon fill="green" value="selected" />
            </div>
        </div>
    );
};

export default Demo;
