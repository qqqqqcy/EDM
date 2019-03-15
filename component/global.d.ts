// // 存放通用方法
// declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
// // 取出所有选填属性
// declare type NullableKeys<T> = {
//   [K in keyof T]-?: undefined extends T[K] ? K : never
// }[keyof T];

/**
 * 样式前缀
 * @value edm(elephant-design-mobile)
 */
declare var $PREFIX: string;
declare type UseType<T> = [T, (value: T) => void];
declare type GetNullableType<T> = Required<Pick<T, NullableKeys<T>>>;
