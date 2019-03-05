import * as React from "react";
import classnames from "classnames";
import { ButtonProps, ButtonSize } from "./PropsType";
import { withDefaultProps, setDefaultProps } from "../common/withDefaultProps";

import "./style";

const defaultProps = setDefaultProps({
  prefixCls: "edm-button",
  size: "large" as ButtonSize,
  onClick: (() => {}) as onClick
});

export default withDefaultProps(
  defaultProps,
  ({
    size,
    onClick,
    children,
    prefixCls,
    className,
    ...restProps
  }: ButtonProps) => {
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
