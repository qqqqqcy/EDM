import * as React from "react";
import { Button, Icon } from "@component/index";
// import { Button, Icon } from "@lib/index";
class Demo extends React.Component {
  onClick = () => {
    console.log("onclick");
  };

  render() {
    return (
      <div>
        <div>
          <Button _size="large" _type="primary" onClick={this.onClick}>
            <Icon _size="large" fill="#fff" _name="alipay" /> primary
          </Button>
          <br />
          <Button
            disabled={true}
            _size="large"
            _type="primary"
            onClick={this.onClick}
          >
            <Icon _size="large" fill="#fff" _name="alipay" />
            primary
          </Button>
          <br />
          <br />
          <Button _size="large" disabled={true}>
            default
          </Button>
          <br />
          <div>
            <Button _inline={true} _ghost={true} onClick={this.onClick}>
              default|ghost
            </Button>
            <Button _inline={true} _type="secondary" onClick={this.onClick}>
              secondary
              <Icon fill="red" _name="alipay" />
            </Button>
            <Button
              _inline={true}
              _size="large"
              _radius={false}
              _type="secondary"
              onClick={this.onClick}
            >
              <Icon _size="large" fill="red" _name="alipay" />
              secondary
            </Button>
          </div>
          <br />
          <Button
            _ghost={true}
            disabled={true}
            _type="secondary"
            onClick={this.onClick}
          >
            secondary|ghost
          </Button>
          <br />
          <Button
            style={{ color: "rgb(100,200,50)" }}
            _radius="10px"
            _ghost={true}
            onClick={this.onClick}
          >
            default|ghost
          </Button>
          <Icon _name="alipay" />
        </div>
      </div>
    );
  }
}

export default Demo;
