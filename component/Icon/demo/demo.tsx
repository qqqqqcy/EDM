import React from 'react';
import { Icon } from '@component/index';

const Demo = () => {
    return (
        <div>
            <div style={{ background: 'gainsboro' }}>
                <Icon fill="red" value="addcart" />
                <Icon fill="blue" value="alipay" />
                <Icon fill="yellow" value="close" />
                <Icon fill="gray" value="remind" />
                <Icon fill="white" value="addcart" />
                <Icon value="addcart" />
            </div>
        </div>
    );
};

export default Demo;
