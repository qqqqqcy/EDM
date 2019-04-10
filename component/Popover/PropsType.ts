import { PortalProps } from '../Portal/PropsType';
import { TransitionWrapProps } from '../TransitionWrap/PropsType';

export interface PopoverPropsType
    extends PortalProps,
        TransitionWrapProps,
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    _onClose?: () => void;
    _arrow?: boolean;
}

import { TouchFeedbackProps } from '../TouchFeedback/PropsType';
export interface PopoverItemProps extends TouchFeedbackProps {
    className?: string;
    prefixCls?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    firstItem?: string;
    activeStyle?: React.CSSProperties;
    style?: React.CSSProperties;
}
