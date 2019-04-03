import { TouchFeedbackProps } from '../TouchFeedback/PropsType';

export interface PopoverPropsType {
    onSelect?: (node: any, index?: number) => void;
    overlay: React.ReactNode;
    disabled?: boolean;
}
