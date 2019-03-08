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
