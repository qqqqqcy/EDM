import * as React from "react";

import { ButtonProps } from "./PropsType";
import { withDefaultProps, setDefaultProps } from "../common/withDefaultProps";
import "./style.css";

const defaultProps = setDefaultProps({
  size: "large",
  callBack: () => {}
});

export default withDefaultProps<ButtonProps, typeof defaultProps>(
  defaultProps,
  ({ size, callBack, prefixCls, ...restProps }: ButtonProps) => (
    <div className={prefixCls}>
      <button {...restProps} onClick={callBack}>
        children {size}
      </button>
    </div>
  )
);
