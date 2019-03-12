/**
 * 样式前缀
 * @value edm(elephant-design-mobile)
 */
declare var $PREFIX: string;
declare type UseType<T> = [T, (value: T) => void];
declare type GetNullableType<T> = Required<Pick<T, NullableKeys<T>>>;
