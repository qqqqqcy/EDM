export interface IconProps extends React.SVGProps<SVGSVGElement> {
    /** 图标名称 */
    value: 'addcart' | 'alipay' | 'close' | 'remind' | string;
    /** 尺寸 */
    size?: 'small' | 'middle' | 'large';
}
