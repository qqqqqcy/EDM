import * as React from "react";
import { Icon } from "@component/index";
class Demo extends React.Component {
  onClick = () => {
    console.log("onclick");
  };

  render() {
    return (
      <div>
        <div>
          <Icon size="large" color="red" name="alipay" />
          <Icon size="large" color="blue" name="alipay" />
          <Icon size="large" color="#ccc" name="alipay" />
          <Icon size="large" color="#ccc" name="wechat" />
        </div>
      </div>
    );
  }
}

export default Demo;
