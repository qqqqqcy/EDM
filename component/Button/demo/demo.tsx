import React from 'react';
import { Button, Icon } from '@component/index';
const Demo = () => {
    function onClick() {
        alert('onClick');
    }
    return (
        <div className="Button">
            <Button size="large" theme="primary" onClick={onClick}>
                <Icon size="large" fill="#fff" value="alipay" /> primary
            </Button>
            <br />
            <Button disabled size="large" theme="primary" onClick={onClick}>
                <Icon size="large" fill="#fff" value="alipay" />
                primary
            </Button>
            <br />
            <br />
            <Button size="large" disabled>
                default
            </Button>
            <br />
            <div>
                <Button inline ghost onClick={onClick}>
                    default|ghost
                </Button>
                <Button inline theme="secondary" onClick={onClick}>
                    secondary
                    <Icon fill="red" value="alipay" />
                </Button>
                <Button inline size="large" radius={false} theme="secondary" onClick={onClick}>
                    <Icon size="large" fill="red" value="alipay" />
                    secondary
                </Button>
            </div>
            <br />
            <Button ghost disabled theme="secondary" onClick={onClick}>
                secondary|ghost
            </Button>
            <br />
            <Button style={{ color: 'rgb(100,200,50)' }} radius="10px" ghost onClick={onClick}>
                default|ghost
            </Button>
        </div>
    );
};

export default Demo;
