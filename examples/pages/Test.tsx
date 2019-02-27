import * as React from "react";
// import { Button } from "../../package";
import { Button } from "lib/package";

export default class Test extends React.Component {
  callBack = () => {
    console.log("click!");
  };
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <Button text="Button" callBack={this.callBack} />
      </div>
    );
  }
}
