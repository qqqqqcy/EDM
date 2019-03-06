import { DefaultProps } from "../common/propsType";

export interface ButtonProps extends DefaultProps {
  size?: "small" | "large";
  ghost?: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}
