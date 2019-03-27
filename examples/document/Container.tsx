import React from "react";
import ReactMarkdown from "react-markdown";
import "../until/markdown.scss";
interface ContainerProps {
  sourceCode: string;
  table: string;
  name: string;
}

import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/dist/styles/prism";

export default (props: ContainerProps) => {
  const { sourceCode, table, name } = props;
  function getHeader(name: string) {
    return `# ${name}` + "\n" + `balabala 说明` + "\n";
  }
  function getText(sourceCode: string, table: string): string {
    return "## API" + "\n" + table;
  }

  return (
    <article className="document-article markdown-body">
      <ReactMarkdown source={getHeader(name)} />
      <SyntaxHighlighter style={base16AteliersulphurpoolLight} language="jsx">
        {sourceCode}
      </SyntaxHighlighter>
      <ReactMarkdown source={getText(sourceCode, table)} />
    </article>
  );
};
