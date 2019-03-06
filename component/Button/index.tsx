import * as React from "react";
import classnames from "classnames";
import { ButtonProps } from "./PropsType";
import setDefaultProps, { getDefaultProps } from "../common/setDefaultProps";

const defaultProps = getDefaultProps<ButtonProps>({
  prefixCls: `${$PREFIX}-button`,
  ghost: false,
  size: "large"
});

export default setDefaultProps(defaultProps, (props: Required<ButtonProps>) => {
  const {
    size,
    ghost,
    onClick,
    children,
    prefixCls,
    className,
    ...restProps
  } = props;
  const cls = classnames(prefixCls, className, {
    [`${prefixCls}-small`]: size === "small",
    [`${prefixCls}-ghost`]: ghost
  });
  console.log(size.length);
  return (
    <React.Fragment>
      <a role="button" className={cls} onClick={onClick} {...restProps}>
        {children}
      </a>
    </React.Fragment>
  );
});
