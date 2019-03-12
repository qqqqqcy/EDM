import * as React from "react";
import * as ReactDOM from "react-dom";
import { PortalProps } from "../PropsType";
import setDefaultProps, { portalProps } from "../setDefaultProps";

const defaultProps: GetNullableType<PortalProps> = {
  ...portalProps
};

let timer: number;
export default setDefaultProps(defaultProps, (props: Required<PortalProps>) => {
  const { mountNode, children, visible, time } = props;
  const [show, useShow]: UseType<boolean> = React.useState(visible);
  React.useEffect(() => {
    window.clearTimeout(timer);
    if (time && !visible) {
      timer = window.setTimeout(() => useShow(false), time + 20);
    } else {
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
