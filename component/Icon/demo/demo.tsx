import React from "react";
import { Icon } from "@component/index";

const Demo = () => {
  return (
    <div>
      <div>
        <Icon _size="large" fill="red" _name="alipay" />
        <Icon _size="large" fill="blue" _name="alipay" />
        <Icon _size="large" fill="#ccc" _name="alipay" />
        <Icon _size="large" fill="#ccc" _name="wechat" />
      </div>
    </div>
  );
};

export default Demo;
