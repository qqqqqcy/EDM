import * as React from "react";
// import { Button } from "@component/index";
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
        <div>
          <Button ghost={true} onClick={this.onClick}>
            Button
          </Button>
        </div>
      </div>
    );
  }
}
