import React from "react";
import Home from "./Home";
import { cpConfig, pageList } from "../until/pageList";
import { Route, RouteComponentProps, Link } from "react-router-dom";

import Container from "./Container";
import Aside from "./Aside";
import Iframe from "./Iframe";
import "./style.scss";

const Mobile: React.SFC<RouteComponentProps> = props => {
  const { match, location } = props;

  function onClick(key: string) {}
  return (
    <div>
      <nav className="document-nav">
        <Link to="/document">back </Link>
        document-nav
      </nav>

      <div className="document-main">
        <Aside component={cpConfig.component} onClick={onClick} />
        {match.isExact ? <Home /> : null}
        {Object.keys(pageList).map(name => {
          const { sourceCode, table } = pageList[name];
          return (
            <Route
              key={name}
              path={`/document/${name}`}
              component={() => (
                <Container name={name} table={table} sourceCode={sourceCode} />
              )}
            />
          );
        })}
        <Iframe src={`#${location.pathname.replace("document", "instance")}`} />
      </div>
    </div>
  );
};

export default Mobile;
