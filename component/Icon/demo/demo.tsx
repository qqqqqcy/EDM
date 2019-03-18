import React from "react";
import { Icon } from "@component/index";
class Demo extends React.Component {
  onClick = () => {
    console.log("onclick");
  };

  render() {
    return (
      <div>
        <div>
          <Icon size="large" fill="red" name="alipay" />
          <Icon size="large" fill="blue" name="alipay" />
          <Icon size="large" fill="#ccc" name="alipay" />
          <Icon size="large" fill="#ccc" name="wechat" />
        </div>
      </div>
    );
  }
}

export default Demo;
