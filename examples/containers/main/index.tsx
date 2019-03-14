import * as React from "react";
import "./index.scss";
// import * as jsesc from "jsesc";
import * as ReactMarkdown from "react-markdown";

export default class Main extends React.PureComponent<null, { Element: any }> {
  state = {
    Element: ""
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
    const { Element } = this.state;
    return (
      <div className="docs">
        <ul className="docs-side">
          {window.$CPCONFIG.map(item => (
            <li
              key={item}
              onClick={() => {
                const a = require("../../../component/Button/other/index.js");
                console.log(a);
                this.setState({
                  Element: a
                });
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="docs-main">
          <ReactMarkdown source={this.getText(Element.txt)} />
          {Element.run ? <Element.run /> : "未选中"}
        </div>
      </div>
    );
  }
}

// todo TSX 高亮
// todo 结合路由
// todo 手机分屏
