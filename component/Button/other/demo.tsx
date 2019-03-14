import * as React from "react";
import { Button, Icon } from "@component/index";
class Demo extends React.Component {
  onClick = () => {
    console.log("onclick");
  };

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h1>Hello world</h1>

        <div>
          <Button size="large" type="primary" onClick={this.onClick}>
            <Icon size="large" color="#fff" name="alipay" />
            primary
          </Button>
          <br />

          <br />
          <Button size="large" disabled={true}>
            default
          </Button>
          <br />
          <div>
            <Button inline={true} ghost={true} onClick={this.onClick}>
              default|ghost
            </Button>
            <Button inline={true} type="secondary" onClick={this.onClick}>
              secondary
              <Icon color="red" name="alipay" />
            </Button>
            <Button
              inline={true}
              size="large"
              radius={false}
              type="secondary"
              onClick={this.onClick}
            >
              <Icon size="large" color="red" name="alipay" />
              secondary
            </Button>
          </div>
          <br />
          <Button
            ghost={true}
            disabled={true}
            type="secondary"
            onClick={this.onClick}
          >
            secondary|ghost
          </Button>
          <br />
          <Button
            style={{ color: "rgb(100,200,50)" }}
            radius="10px"
            ghost={true}
            onClick={this.onClick}
          >
            default|ghost
          </Button>
          <Icon name="alipay" />
        </div>
      </div>
    );
  }
}

export default Demo;
