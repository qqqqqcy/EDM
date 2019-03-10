import * as React from "react";
import { IconProps } from "./PropsType";
import "./importAll";

const Icon: React.FunctionComponent<IconProps> = ({ name = "wechat" }) => {
  return (
    <div>
      <svg>
        <use xlinkHref={`#${name}`} />
      </svg>
    </div>
  );
};

export default Icon;
