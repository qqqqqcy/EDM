import React from "react";

interface IframeProps {
  src: string;
}

export default (props: IframeProps) => {
  const { src } = props;
  return (
    <div className="document-iframe">
      <iframe src={src || "#/instance"} width="375" height="667" />
    </div>
  );
};
