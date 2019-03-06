import { DefaultProps } from "../common/propsType";

export interface ButtonProps extends DefaultProps {
  size?: "small" | "large";
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}
