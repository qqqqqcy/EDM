import * as React from "react";

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
  prefixCls?: string;
  style?: React.CSSProperties;
}

// export interface Props extends BaseProps {
//   onClick?: (event: React.MouseEvent<HTMLElement>) => void;
// }
