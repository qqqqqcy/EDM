import React, { useState } from 'react';
import { Popover, Button } from '@component/index';
const Demo = () => {
    const [isShow, setIsShow] = useState(true);

    const showPopover = () => {
        setIsShow(true);
    };

    const hidePopover = () => setIsShow(false);

    return (
        <div className="Popover">
            <div style={{ width: '50%' }}>
                <Button _size={'small'} _type={'default'} onClick={showPopover}>
                    test
                </Button>
            </div>
            <Popover _visible={isShow} _onClose={hidePopover}>
                {['red', 'yellow', 'blue'].map((v, i) => (
                    <p>v</p>
                ))}
            </Popover>
        </div>
    );
};

export default Demo;
