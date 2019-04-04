import React from 'react';
import { Icon } from '@component/index';

const Demo = () => {
    return (
        <div>
            <div>
                <Icon size="large" fill="red" value="alipay" />
                <Icon size="large" fill="blue" value="alipay" />
                <Icon size="large" fill="#ccc" value="alipay" />
                <Icon size="large" fill="#ccc" value="wechat" />
            </div>
        </div>
    );
};

export default Demo;
