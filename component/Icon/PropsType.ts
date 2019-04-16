export interface IconProps extends React.SVGProps<SVGSVGElement> {
    /** 图标名称 */
    value: 'wechat' | 'alipay' | 'test' | string;
    /** 尺寸 */
    size?: 'small' | 'middle' | 'large';
}
