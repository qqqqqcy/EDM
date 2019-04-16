import React from 'react';
import { Icon } from '@component/index';

const Demo = () => {
    return (
        <div>
            <div style={{ background: 'gainsboro' }}>
                <Icon fill="red" value="alipay" />
                <Icon fill="blue" value="wechat" />
                <Icon fill="blue" value="check" />
                <Icon fill="blue" value="ellipsis" />
                <Icon fill="blue" value="test" />
                <Icon fill="blue" value="test1" />
            </div>
        </div>
    );
};

export default Demo;
