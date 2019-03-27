import React from "react";
import Home from "./Home";
import { pageList } from "../until/pageList";
import { Route, Link, RouteComponentProps } from "react-router-dom";

const Mobile: React.SFC<RouteComponentProps> = props => {
  const { match } = props;
  return (
    <div className={``}>
      <h1>
        <Link to="/instance">back</Link> Header
      </h1>
      {match.isExact ? <Home /> : null}

      {Object.keys(pageList).map(key => (
        <Route
          key={key}
          path={`/instance/${key}`}
          component={pageList[key].runnableCode as any}
        />
      ))}
    </div>
  );
};

export default Mobile;
