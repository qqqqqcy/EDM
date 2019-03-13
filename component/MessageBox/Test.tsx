import * as React from "react";
import * as ReactDOM from "react-dom";

import Portal from "../common/Portal";
let div: any;

const Test: React.SFC<{ v: boolean }> = props => {
  const { v } = props;
  const [vi, setVi] = React.useState(true);
  React.useEffect(() => {
    console.log("useEffect", v);
    setVi(false);
  }, [v]);
  return (
    <Portal time={1000} visible={vi}>
      <div>
        <h1
          onClick={() => {
            setVi(!vi);
          }}
        >
          {v}
          {vi}
          hello React!
        </h1>
      </div>
    </Portal>
  );
};

export default class TTest extends React.PureComponent<
  { v: boolean },
  { v: boolean }
> {
  constructor(props: any) {
    super(props);
    console.log("test");
    this.state = {
      v: props.v
    };
  }
  static create = (props: any) => {
    console.log("create");
    div = document.createElement("div");
    document.body.appendChild(div);
    const message: any = ReactDOM.render(<TTest v={props.v} />, div);
    return {
      remove() {
        return message.destroy();
      }
    };
  };

  destroy = () => {
    this.setState({ v: false });
    console.log(this.state);
    console.log(this);
  };

  render() {
    const { v } = this.state;
    console.log("render", v);
    // return <Test v={v} />;
    return (
      <Portal time={1000} visible={v}>
        <div>
          <h1
            onClick={() => {
              this.setState({ v: !v });
            }}
          >
            {"asd"}
            {v ? "hello React!" : null}
          </h1>
        </div>
      </Portal>
    );
  }
}
