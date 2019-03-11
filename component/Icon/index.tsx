import * as React from "react";
import { IconProps } from "./PropsType";
import "./importAll";

import classnames from "classnames";
import setDefaultProps, { defaultBaseProps } from "../common/setDefaultProps";

const defaultProps: GetNullableType<IconProps> = {
  ...defaultBaseProps,
  prefixCls: `${$PREFIX}-icon`,
  size: "middle",
  color: "",
  onClick: () => {}
};

export default setDefaultProps(defaultProps, (props: Required<IconProps>) => {
  const {
    name,
    size,
    color,
    style,
    className,
    prefixCls,
    ...restProps
  } = props;
  const cls = classnames(prefixCls, className, `${prefixCls}-${size}`);
  return (
    <svg
      aria-hidden="true"
      className={cls}
      style={color ? { fill: color, ...style } : style}
      {...restProps}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
});
