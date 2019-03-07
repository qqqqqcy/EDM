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
  size: "large"
};

export default setDefaultProps(defaultProps, (props: Required<ButtonProps>) => {
  const {
    size,
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
  const cls = classnames(prefixCls, className, {
    [`${prefixCls}-small`]: size === "small",
    [`${prefixCls}-ghost`]: ghost
  });
  console.log(size.length);
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
