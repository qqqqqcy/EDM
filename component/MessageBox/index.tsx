// import classnames from "classnames";
// import * as React from "react";

import Test from "./Test";
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
function getMessageInstance(str: string) {
  if (messageInstance) {
    messageInstance.remove();
    // messageInstance = null;
  } else {
    messageInstance = Test.create({ v: true });
    console.log(messageInstance);
  }
}

function messageBox(content: string = "default") {
  getMessageInstance(content);
}

export default {
  show(str?: string) {
    return messageBox(str);
  }
};
