import * as React from "react";
import { PropsType } from "./PropsType";

export interface ButtonProps extends PropsType {}

export default class Button extends React.PureComponent<ButtonProps> {
  render() {
    const { text, callBack } = this.props;
    return (
      <div>
        <button onClick={() => (callBack ? callBack() : "")}>
          {text}
        </button>
      </div>
    );
  }
}
