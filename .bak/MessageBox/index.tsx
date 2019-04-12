// import classnames from "classnames";
// import React from "react";

import Test from './Test';
// import Notification from 'rmc-notification';
// import Icon from '../icon';

let messageInstance: any;
// let test: any;

// const prefixCls = `${$PREFIX}-messagebox`;

// class Instance {
//   constructor(str: string) {
//     test = new Test({ v: true });
//   }

//   destroy() {
//     console.log(test);
//   }
// }
function getMessageInstance() {
    if (messageInstance) {
        return messageInstance;
    } else {
        messageInstance = Test.create({ time: 200, content: 'first' });
        return messageInstance;
    }
}

// function messageBox(content: string = "default") {
// }

export default {
    show(obj: any) {
        getMessageInstance().show(obj);
    },
    clear() {
        if (messageInstance) {
            return messageInstance.clear('cccc');
        }
    },
};
