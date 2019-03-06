import { SFC } from "react";
import { BaseProps } from "./CommonProps";

export const setDefaultProps = <
  P extends object,
  DP extends Partial<P> = Partial<P>
>(
  defaultProps: DP,
  Cmp: SFC<P>
) => {
  type RequiredProps = Omit<P, keyof DP>;
  type Props = Partial<DP> & Required<RequiredProps>;
  // type Props = Required<DP> & Partial<RequiredProps>;
  Cmp.defaultProps = defaultProps;
  return (Cmp as SFC<any>) as SFC<Props>;
  // return (Cmp as SFC<any>) as SFC<Required<P>>;
};

export const defaultBaseProps = {
  className: "",
  children: "",
  prefixCls: "",
  style: {}
};

/**
 * 设置组件中可选参数的初始值
 * @ 可选参数：必须定义初始值
 * @ 必传参数：不能定义初始值
 */
export const getDefaultProps = <T>(
  obj: GetNullableType<T, BaseProps> & BaseProps
) => ({
  ...defaultBaseProps,
  ...obj
});
