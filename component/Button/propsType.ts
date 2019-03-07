import { DefaultBaseProps, TouchFeedbackProps } from "../common/PropsType";

export interface ButtonProps extends DefaultBaseProps, TouchFeedbackProps {
  size?: "small" | "large";
  ghost?: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}
