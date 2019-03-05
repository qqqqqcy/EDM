// 存放通用方法
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

// 存放通用类型
type onClick = (e: React.MouseEvent<HTMLElement>) => void;
