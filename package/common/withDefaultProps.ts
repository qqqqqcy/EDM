import { SFC } from "react";
import { BaseProps } from "./CommonProps";

const defaultProps = {
  className: "",
  children: "",
  prefixCls: "",
  style: {}
};

export const withDefaultProps = <
  P extends object,
  DP extends Partial<P> = Partial<P>
>(
  defaultProps: DP,
  Cmp: SFC<P>
) => {
  type RequiredProps = Omit<P, keyof DP>;
  type Props = Partial<DP> & Required<RequiredProps>;
  Cmp.defaultProps = defaultProps;
  return (Cmp as SFC<any>) as SFC<Props>;
};

export const setDefaultProps = <T>(obj: Partial<T>) =>
  ({ ...defaultProps, ...obj } as Pick<T, keyof typeof obj> & BaseProps);
