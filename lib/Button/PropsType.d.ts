/// <reference types="react" />
import { TouchFeedbackProps } from "../common/PropsType";
export interface ButtonProps extends TouchFeedbackProps, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    _size?: "small" | "middle" | "large";
    _ghost?: boolean;
    _inline?: boolean;
    _type?: "default" | "primary" | "secondary";
    _radius?: boolean | string;
}
