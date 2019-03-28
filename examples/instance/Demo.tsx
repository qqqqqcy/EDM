import React from "react";
import { getComponent } from "../until/structure";

interface DemoProps {
  item: DirectoryStructureItem;
}
export default (props: DemoProps) => {
  const { item } = props;
  const Demo = getComponent(item).demo || null;
  return <main className="instance-demo">{Demo ? <Demo /> : null}</main>;
};
