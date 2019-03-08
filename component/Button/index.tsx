import * as React from "react";
import classnames from "classnames";
import { ButtonProps } from "./PropsType";
import setDefaultProps, {
  defaultBaseProps,
  touchFeedbackProps
} from "../common/setDefaultProps";

import TouchFeedback from "../common/TouchFeedback";

const defaultProps: GetNullableType<ButtonProps> = {
  ...defaultBaseProps,
  ...touchFeedbackProps,
  prefixCls: `${$PREFIX}-button`,
  ghost: false,
  size: "large",
  type: "default"
};

export default setDefaultProps(defaultProps, (props: Required<ButtonProps>) => {
  const {
    size,
    type,
    ghost,
    onClick,
    disabled,
    children,
    prefixCls,
    className,
    activeStyle,
    activeClassName,
    ...restProps
  } = props;
  const cls = classnames(prefixCls, "aaa", className, {
    [`${prefixCls}-small`]: size === "small",
    [`${prefixCls}-primary`]: type === "primary",
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-ghost`]: ghost
  });
  return (
    <TouchFeedback
      activeClassName={
        activeClassName || (activeStyle ? `${prefixCls}-active` : undefined)
      }
      activeStyle={activeStyle}
      disabled={disabled}
    >
      <a
        role="button"
        className={cls}
        onClick={disabled ? undefined : onClick}
        aria-disabled={disabled}
        {...restProps}
      >
        {children}
      </a>
    </TouchFeedback>
  );
});
