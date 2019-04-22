import React, { useRef, useState } from 'react';
import { Button, Popover } from '@src/index';
const Demo = () => {
    const [isShow, setIsShow] = useState(false);
    const testBtn = useRef(null);
    const showPopover = () => {
        setIsShow(true);
    };

    const hidePopover = () => setIsShow(false);

    return (
        <>
            <div ref={testBtn}>
                <Button size={'small'} onClick={showPopover}>
                    test
                </Button>
            </div>
            <Popover
                visible={isShow}
                onClose={hidePopover}
                anchorEl={testBtn.current}
                dir={'bottom-center'}
                hasArrow={true}
            >
                {['red', 'yellow', 'blue'].map((v, i) => (
                    <p key={i} style={{ padding: 0, margin: 0 }}>
                        {v}
                    </p>
                ))}
            </Popover>
        </>
    );
};

export default Demo;
