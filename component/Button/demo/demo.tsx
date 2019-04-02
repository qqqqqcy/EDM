import React from 'react';
import { Button, Icon } from '@component/index';
function onClick() {
    alert('onClick');
}
const Demo = () => {
    return (
        <div className="Button">
            <Button _size="large" _type="primary" onClick={onClick}>
                <Icon _size="large" fill="#fff" _name="alipay" /> primary
            </Button>
            <br />
            <Button disabled _size="large" _type="primary" onClick={onClick}>
                <Icon _size="large" fill="#fff" _name="alipay" />
                primary
            </Button>
            <br />
            <br />
            <Button _size="large" disabled>
                default
            </Button>
            <br />
            <div>
                <Button _inline _ghost onClick={onClick}>
                    default|ghost
                </Button>
                <Button _inline _type="secondary" onClick={onClick}>
                    secondary
                    <Icon fill="red" _name="alipay" />
                </Button>
                <Button _inline _size="large" _radius={false} _type="secondary" onClick={onClick}>
                    <Icon _size="large" fill="red" _name="alipay" />
                    secondary
                </Button>
            </div>
            <br />
            <Button _ghost disabled _type="secondary" onClick={onClick}>
                secondary|ghost
            </Button>
            <br />
            <Button style={{ color: 'rgb(100,200,50)' }} _radius="10px" _ghost onClick={onClick}>
                default|ghost
            </Button>
            <Icon _name="alipay" />
        </div>
    );
};

export default Demo;
