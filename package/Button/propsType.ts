import { BaseProps } from "../common/CommonProps";
export type ButtonSize = "small" | "large";
export interface ButtonProps extends BaseProps {
  size?: ButtonSize;
  onClick?: onClick;
}
