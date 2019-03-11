import { DefaultBaseProps } from "../common/PropsType";

export interface IconProps extends DefaultBaseProps {
  name: "wechat" | "alipay";
  size?: "small" | "middle" | "large";
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  color?: string;
}
