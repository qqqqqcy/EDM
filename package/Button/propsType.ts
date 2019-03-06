import { BaseProps } from "../common/CommonProps";
export interface ButtonProps extends BaseProps {
  size?: "small" | "large";
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

// import { BaseProps } from "../common/CommonProps";
// export interface ButtonProps {
//   size?: "small" | "large";
//   onClick: (e: React.MouseEvent<HTMLElement>) => void;
// }
