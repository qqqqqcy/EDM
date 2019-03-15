import * as React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";

import Test from "./pages/Test";

import Mmobile from "./mobile";
import DocsPage from "./containers/docs";
// import { Button } from "@component/index";

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App height-100">
        {/* <Test /> */}
        <Router>
          <div className="height-100">
            <Route
              exact={true}
              path="/"
              render={() => <Redirect to="/mobile" />}
              // render={() => <Redirect to="/docs/introduce" />}
            />
            <Route path="/mobile" component={Mmobile as any} />

            <Route path="/docs" component={DocsPage as any} />
          </div>
        </Router>
        {/* <Test /> */}
      </div>
    );
  }
}
