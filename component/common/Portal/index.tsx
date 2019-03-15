import React from "react";
import ReactDOM from "react-dom";
import { PortalProps } from "../PropsType";
import setDefaultProps, { portalProps } from "../setDefaultProps";

const defaultProps: GetNullableType<PortalProps> = {
  ...portalProps
};

export default setDefaultProps(defaultProps, (props: Required<PortalProps>) => {
  const { mountNode, children, visible, time } = props;
  const [show, useShow]: UseType<boolean> = React.useState(visible);
  // timer 放函数外面会导致不同组件相互影响，放里面每次状态刷新都会生成新的作用域。因此需要单独设置一个 state
  const [timer, useTimer]: UseType<number> = React.useState(0);
  React.useEffect(() => {
    window.clearTimeout(timer);
    if (!visible) {
      if (time) {
        useTimer(window.setTimeout(() => useShow(false), time));
      } else {
        useShow(false);
      }
    } else {
      console.log("useShow");
      useShow(true);
    }
  }, [visible]);
  let legalMountNode: Element;
  if (!mountNode) {
    console.log(`Can not find mountNode[${mountNode}], so use document.body`);
    legalMountNode = document.body;
  } else {
    legalMountNode = mountNode;
  }
  return show ? ReactDOM.createPortal(children, legalMountNode) : null;
});
