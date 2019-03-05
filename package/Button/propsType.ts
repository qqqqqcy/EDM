import { BaseProps } from "../common/CommonProps";

export interface ButtonProps extends BaseProps {
  size?: "small" | "large";
  callBack: () => void;
}
