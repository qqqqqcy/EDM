import React, { Fragment } from "react";
import "./index.scss";
import ReactMarkdown from "react-markdown";
import { cpConfig, pageList } from "../../until/pageList";
import { Button } from "@component/index";

export default class Docs extends React.PureComponent<null, { sourceCode: any; iframeSrc: any; table: any }> {
    state = {
        sourceCode: "",
        table: "",
        iframeSrc: "#/mobile"
    };

    getText = (str: string = "", table: string = "") => {
        setTimeout(() => {
            document.querySelectorAll("pre code").forEach(block => {
                // hljs.highlightBlock(block);
            });
        }, 100);
        return (
            "## 代码演示" +
            "\n" +
            `\`\`\`html ${str.replace(/(^[" ]|[" ]$)/g, "")}\`\`\`` +
            "\n" +
            "## API" +
            "\n" +
            table
        );
    };

    render() {
        const { sourceCode, table } = this.state;
        return (
            <div className="docs">
                <div className="docs-header">
                    <div className="search-box" />
                </div>

                <div className="docs-wrap">
                    <div className="docs-side">
                        {cpConfig.component.map((key: string) => (
                            <Fragment key={key}>
                                <Button
                                    _radius={false}
                                    _size="large"
                                    onClick={() => {
                                        const { sourceCode = "", table = "" } = pageList[key];
                                        // const obj = require(`../../../component/${item}/demo`);
                                        this.setState({
                                            sourceCode,
                                            table,
                                            iframeSrc: `#/mobile/${key}`
                                        });
                                    }}
                                >
                                    {key}
                                </Button>
                                <br />
                            </Fragment>
                        ))}
                    </div>

                    <div className="docs-view">
                        <div className="docs-page-content">
                            <div className="docs-main">
                                <div className="docs-code">
                                    <ReactMarkdown source={this.getText(sourceCode, table)} />
                                </div>
                                <div className="docs-iframe">
                                    <iframe src={this.state.iframeSrc} width="375" height="667" frameBorder="0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// todo TSX 高亮
// todo 结合路由
// todo 手机分屏
