import React, { Fragment } from "react";
import { Button } from "@component/index";
import { Link } from "react-router-dom";

interface AsideProps {
  structure: { [propName: string]: DirectoryStructureItem[] };
  onClick: (key: string) => void;
}

const Aside = (props: AsideProps) => {
  const { structure, onClick } = props;

  return (
    <div className="document-aside">
      {Object.keys(structure).map(key => (
        <Fragment key={key}>
          <p>{key}</p>
          {structure[key].map(item => (
            <Link to={`/document/${item.name}`} key={item.name}>
              <Button
                className="document-aside-btn"
                _ghost={true}
                _radius={false}
                _size="large"
                onClick={() => onClick(item.name)}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </Fragment>
      ))}
    </div>
  );
};
export default Aside;
