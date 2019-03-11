import { DefaultBaseProps, TouchFeedbackProps } from "../common/PropsType";

export interface ButtonProps extends DefaultBaseProps, TouchFeedbackProps {
  size?: "small" | "middle" | "large";
  ghost?: boolean;
  inline?: boolean;
  type?: "default" | "primary" | "secondary";
  radius?: boolean | string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
