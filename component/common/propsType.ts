import * as React from "react";

export type Children = any;
export type Style = React.CSSProperties;

export interface DefaultBaseProps {
  className?: string;
  children?: Children;
  prefixCls?: string;
  style?: Style;
}

export interface TouchFeedbackProps {
  disabled?: boolean;
  activeClassName?: string;
  activeStyle?: Style;
  children?: Children;
}
export interface TransitionWrapProps {
  visible?: boolean;
  time?: number;
  transitionClassName?: string;
  unmountOnExit?: boolean;
  children?: Children;
  onEntry?: () => void;
}
export type TransitionStatus =
  | "entry"
  | "entry-active"
  | "entry-done"
  | "exit"
  | "exit-active"
  | "exit-done";
