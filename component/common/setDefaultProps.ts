import { SFC } from "react";
import {
  DefaultBaseProps,
  TouchFeedbackProps,
  TransitionWrapProps
} from "./PropsType";

// 基础属性
export const defaultBaseProps: Required<DefaultBaseProps> = {
  className: "",
  children: "",
  prefixCls: "",
  style: {}
};
export const touchFeedbackProps: Required<TouchFeedbackProps> = {
  disabled: false,
  activeClassName: "",
  activeStyle: {},
  children: ""
};
export const transitionWrapProps: Required<TransitionWrapProps> = {
  visible: true,
  time: 250,
  transitionClassName: "",
  unmountOnExit: true,
  children: ""
};

export default <P extends object, DP extends Partial<P> = Partial<P>>(
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
