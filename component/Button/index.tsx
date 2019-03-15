import React from "react";
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
  inline: false,
  radius: true,
  size: "middle",
  type: "default",
  onClick: () => {}
};

export default setDefaultProps(defaultProps, (props: Required<ButtonProps>) => {
  const {
    size,
    type,
    ghost,
    style,
    inline,
    radius,
    onClick,
    disabled,
    children,
    prefixCls,
    className,
    activeStyle,
    activeClassName,
    ...restProps
  } = props;
  const cls = classnames(
    prefixCls,
    className,
    `${prefixCls}-${size}`,
    `${prefixCls}-${type}`,
    {
      [`${prefixCls}-radius`]: radius === true,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-ghost`]: ghost,
      [`${prefixCls}-inline`]: inline
    }
  );
  return (
    <TouchFeedback
      activeClassName={
        activeClassName || (activeStyle ? `${prefixCls}-active` : undefined)
      }
      activeStyle={activeStyle}
      disabled={disabled}
    >
      <p
        role="button"
        className={cls}
        style={
          typeof radius === "string"
            ? { ...style, borderRadius: radius }
            : style
        }
        {...restProps}
        onClick={disabled ? undefined : onClick}
        aria-disabled={disabled}
      >
        {children}
      </p>
    </TouchFeedback>
  );
});
