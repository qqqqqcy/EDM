import React from "react";
import classnames from "classnames";
import { ButtonProps } from "./PropsType";
import TouchFeedback from "../common/TouchFeedback";
const prefixCls = `${$PREFIX}-button`;

export default (props: ButtonProps) => {
  const {
    _size = "middle",
    _type = "default",
    _ghost = false,
    _radius = true,
    _inline = false,
    style,
    disabled,
    className,
    activeStyle,
    activeClassName,
    ...restProps
  } = props;
  const cls = classnames(
    prefixCls,
    className,
    `${prefixCls}-${_size}`,
    `${prefixCls}-${_type}`,
    {
      [`${prefixCls}-radius`]: _radius === true,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-ghost`]: _ghost,
      [`${prefixCls}-inline`]: _inline
    }
  );
  return (
    <TouchFeedback
      activeClassName={activeClassName || `${prefixCls}-active`}
      activeStyle={activeStyle}
      disabled={disabled}
    >
      <button
        {...restProps}
        role="button"
        className={cls}
        style={
          typeof _radius === "string"
            ? { ...style, borderRadius: _radius }
            : style
        }
        disabled={disabled}
        aria-disabled={disabled}
      />
    </TouchFeedback>
  );
};
