import { BaseProps } from "../common/BaseProps";

export interface ButtonProps extends BaseProps {
  size?: "small" | "large";
  callBack: () => void;
}
