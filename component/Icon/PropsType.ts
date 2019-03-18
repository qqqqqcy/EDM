import { DefaultBaseProps } from "../common/PropsType";

export interface IconProps extends DefaultBaseProps {
  name: "wechat" | "alipay";
  size?: "small" | "middle" | "large";
  fill?: string;
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}
