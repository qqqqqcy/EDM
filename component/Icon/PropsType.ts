export interface IconProps extends React.SVGProps<SVGSVGElement> {
    /** 图标名称 */
    value: 'wechat' | 'alipay';
    /** 尺寸 */
    size?: 'small' | 'middle' | 'large';
}
