import * as React from "react";
import { Props } from "./propsType";

export default class Button extends React.PureComponent<Props> {
  render() {
    const { text, callBack } = this.props;
    return (
      <div>
        <button onClick={() => (callBack ? callBack() : "")}>{text} Demo</button>
      </div>
    );
  }
}
