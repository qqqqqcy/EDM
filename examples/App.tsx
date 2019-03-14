import * as React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";

import "./lib/importAll";
// import Test from "./pages/Test";
import MainPage from "./containers/main";
// import { DocsPage } from "./containers/api/DocsPage";

export default class App extends React.PureComponent {
  componentDidMount() {
    console.log("cpConfig", window.$CPCONFIG);
  }
  render() {
    return (
      <div className="App height-100">
        <Router>
          <div className="height-100">
            <Route
              exact={true}
              path="/"
              render={() => <Redirect to="/main" />}
              // render={() => <Redirect to="/docs/introduce" />}
            />
            <Route path="/main" component={MainPage as any} />
            {/* <Route path="/docs" component={DocsPage} /> */}
          </div>
        </Router>
        {/* <Test /> */}
      </div>
    );
  }
}
