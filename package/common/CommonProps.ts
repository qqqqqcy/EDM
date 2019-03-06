import * as React from "react";

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
  prefixCls?: string;
  style?: React.CSSProperties;
}

export type onClick = (e: React.MouseEvent<HTMLElement>) => void;
