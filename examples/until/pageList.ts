export const cpConfig = {
  component: ["Button", "Icon", "MessageBox"]
};

export const pageList: any = {};
cpConfig.component.map(item => {
  let temp: any;
  try {
    temp = require(`../../component/${item}/demo/index`);
  } catch (e) {
    temp = "";
  }
  if (temp) {
    pageList[item] = temp;
  }
});
