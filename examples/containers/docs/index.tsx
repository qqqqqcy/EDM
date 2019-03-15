import React from "react";
import "./index.scss";
import ReactMarkdown from "react-markdown";
import { cpConfig, pageList } from "../../until/pageList";
import { Button } from "@component/index";

export default class Docs extends React.PureComponent<
  null,
  { sourceCode: any; iframeSrc: any }
> {
  state = {
    sourceCode: "",
    iframeSrc: "/"
  };

  getText = (str: string = "") => {
    setTimeout(() => {
      document.querySelectorAll("pre code").forEach(block => {
        hljs.highlightBlock(block);
      });
    }, 100);
    return `\`\`\`html ${str.replace(/(^[" ]|[" ]$)/g, "")}\`\`\``;
  };
  render() {
    const { sourceCode } = this.state;
    return (
      <div className="docs">
        <div className="docs-side">
          {cpConfig.component.map((key: string) => (
            <Button
              key={key}
              onClick={() => {
                const { sourceCode = "" } = pageList[key];
                // const obj = require(`../../../component/${item}/demo`);
                this.setState({
                  sourceCode,
                  iframeSrc: `#/mobile/${key}`
                });
              }}
            >
              {key}
            </Button>
          ))}
        </div>
        <div className="docs-main">
          <ReactMarkdown source={this.getText(sourceCode)} />
        </div>
        <div className="docs-iframe">
          <iframe src={this.state.iframeSrc} width="375" height="667" />
        </div>
      </div>
    );
  }
}

// todo TSX 高亮
// todo 结合路由
// todo 手机分屏
