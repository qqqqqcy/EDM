import * as React from "react";
// import { Button, Icon } from "@lib/index";
import { Button, Icon } from "@component/index";
import TransitionWrap from "@component/common/TransitionWrap";
import Portal from "@component/common/Portal";
import "./style.scss";
import MessageInstance from "@component/MessageBox/index.tsx";
export default class Test extends React.Component<
  {},
  { vi: boolean; vp: boolean }
> {
  state = {
    vi: true,
    vp: true
  };
  onClick = () => {
    MessageInstance.show({
      children: (
        <Button
          ghost={true}
          size="large"
          type="primary"
          onClick={() => {
            MessageInstance.clear();
          }}
        >
          <Icon size="large" color="red" name="alipay" />
          remove
        </Button>
      )
    });
    this.setState({ vi: !this.state.vi, vp: true });
  };

  render() {
    return (
      <div>
        <h1>Hello world</h1>

        <Portal visible={this.state.vp}>
          <div>
            <TransitionWrap
              time={2000}
              visible={this.state.vi}
              transitionClassName="hello"
              onExitDone={() => {
                this.setState({ vp: this.state.vi });
              }}
            >
              <h1 className="hello">Hello world</h1>
              <h1 className="hello">world Hello </h1>
              <h1 className="hello">world Hello </h1>
            </TransitionWrap>
          </div>
        </Portal>

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
