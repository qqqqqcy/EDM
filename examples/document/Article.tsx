import React, { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/dist/styles/prism";

import { getComponent } from "../until/structure";

interface ContainerProps {
  item: DirectoryStructureItem;
}

export default (props: ContainerProps) => {
  const { item } = props;
  const { demoSource, readme } = getComponent(item);
  function splitReadme(readme: string = "") {
    return readme.split("## Demo");
  }

  const [demoBefore, demoAfter] = splitReadme(readme);

  return (
    <article className="document-article">
      <div className="markdown-body">
        <ReactMarkdown source={demoBefore} />
        {demoAfter ? (
          <Fragment>
            <SyntaxHighlighter
              style={base16AteliersulphurpoolLight}
              language="jsx"
            >
              {demoSource}
            </SyntaxHighlighter>
            <ReactMarkdown source={demoAfter} />
          </Fragment>
        ) : null}
      </div>
    </article>
  );
};
