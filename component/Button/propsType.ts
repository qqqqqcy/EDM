import { DefaultBaseProps, TouchFeedbackProps } from "../common/PropsType";

export interface ButtonProps extends DefaultBaseProps, TouchFeedbackProps {
  size?: "small" | "large";
  ghost?: boolean;
  type?: "default" | "primary";
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}
