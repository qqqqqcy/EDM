import React from "react";
import { Button } from "@component/index";
import { Link } from "react-router-dom";

interface AsideProps {
  component: any[];
  onClick: (key: string) => void;
}

export default (props: AsideProps) => {
  const { component = [], onClick } = props;
  return (
    <div className="document-aside">
      {component.map((key: string) => (
        <Link to={`/document/${key}`} key={key}>
          <Button _radius={false} _size="large" onClick={() => onClick(key)}>
            {key}
          </Button>
          <br />
        </Link>
      ))}
    </div>
  );
};
