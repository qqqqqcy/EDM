import { TouchFeedbackProps } from '../TouchFeedback/PropsType';

export interface ButtonProps
    extends TouchFeedbackProps,
        React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /** 按钮主题 */
    theme?: 'default' | 'primary' | 'secondary';
    /** 尺寸 */
    size?: 'small' | 'middle' | 'large';
    /** 按钮虚实 */
    ghost?: boolean;
    /** 行内按钮 */
    inline?: boolean;
    /** 圆角 or 具体尺寸（例：10px,1rem） */
    radius?: boolean | string;
}
