import * as React from "react";
// import { Button } from "../../package";
// import { Button } from "../../lib/package";
// import { Button } from "@package/index";
import { Button } from "@lib/index";

export default class Test extends React.Component {
  onClick = () => {
    console.log("click!");
  };
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <div>
          <Button
            size="small"
            onClick={this.onClick}
            // style={{ background: "blue" }}
          >
            Button
          </Button>
        </div>
      </div>
    );
  }
}
