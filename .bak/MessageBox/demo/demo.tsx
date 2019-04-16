import React from 'react';
import { MessageBox, Button } from '@component/index';
const Demo = () => {
    return (
        <div className="TouchFeedback">
            <Button
                onClick={() => {
                    MessageBox.show;
                }}
            >
                MessageBox
            </Button>
        </div>
    );
};

export default Demo;
