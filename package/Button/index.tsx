import * as React from "react";
import classnames from "classnames";
import { ButtonProps } from "./PropsType";
import { setDefaultProps, getDefaultProps } from "../common/setDefaultProps";

import "./style";

const defaultProps = getDefaultProps<ButtonProps>({
  prefixCls: "edm-button",
  size: "large",
  style: { background: "red" }
});

export default setDefaultProps<ButtonProps>(
  defaultProps,
  ({ size, onClick, children, prefixCls, className, ...restProps }) => {
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-small`]: size === "small"
    });
    return (
      <a role="button" className={cls} onClick={onClick} {...restProps}>
        {children}
      </a>
    );
  }
);
