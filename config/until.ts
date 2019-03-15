import path from "path";

export const getProjectUrl = (...urlList: string[]) => {
  return path.resolve(__dirname, "../", ...(urlList || []));
};

export const pkg = import(path.join(process.cwd(), "package.json"));
