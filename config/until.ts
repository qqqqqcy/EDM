import * as path from "path";

export const getProjectUrl = (...urlList: string[]) => {
  return path.resolve(__dirname, "../", ...(urlList || []));
};

export const pkg = require(path.join(process.cwd(), "package.json"));
