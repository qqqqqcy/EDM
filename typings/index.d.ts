import "./custom.d";

// 存放通用方法
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
// 取出所有选填属性
type NullableKeys<T> = {
  [K in keyof T]-?: undefined extends T[K] ? K : never
}[keyof T];

// type GetNullableType<T> = Pick<T, NullableKeys<T>>;
/**
 * 设置组件中可选参数的初始值
 * @ 可选参数：必须定义初始值
 * @ 必传参数：不能定义初始值
 */
// type GetNullableType<T> = Required<Pick<T, NullableKeys<T>>>;

// 存放通用类型
// type onClick = (e: React.MouseEvent<HTMLElement>) => void;
import "./raw-loader";

declare module "*.svg" {
  const content: any;
  export default content;
}
