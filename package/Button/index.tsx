import * as React from "react";
import { PropsType } from "./PropsType";

export default class Button extends React.PureComponent<PropsType> {
  render() {
    const { text, callBack } = this.props;
    return (
      <div>
        <button onClick={() => (callBack ? callBack() : "")}>
          {text} Demo
        </button>
      </div>
    );
  }
}
