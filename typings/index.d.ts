// 存放通用方法
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
// 取出所有选填属性
type NullableKeys<T> = {
  [K in keyof T]-?: undefined extends T[K] ? K : never
}[keyof T];

// type GetNullableType<T> = Pick<T, NullableKeys<T>>;
type GetNullableType<T extends D, D = {}> = Required<
  Pick<T, NullableKeys<Omit<T, keyof D>>>
>;

// 存放通用类型
// type onClick = (e: React.MouseEvent<HTMLElement>) => void;
