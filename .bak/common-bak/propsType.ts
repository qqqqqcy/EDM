export type Children = React.ReactNode;
export type ReactChildren = React.ReactElement;
export type Style = React.CSSProperties;

// export interface DefaultBaseProps {
//   // className?: string;
//   // children?: Children;
//   prefixCls?: string;
//   // style?: Style;
// }

export interface TouchFeedbackProps {
    disabled?: boolean;
    activeClassName?: string;
    activeStyle?: Style;
}
export interface TransitionWrapProps {
    visible?: boolean;
    time?: number;
    transitionClassName?: string;
    unmountOnExit?: boolean;
    onEntry?: () => void;
    onEntryDone?: () => void;
    onExitDone?: () => void;
}

export type TransitionStatus = 'entry' | 'entry-active' | 'entry-done' | 'exit' | 'exit-active' | 'exit-done';

export interface PortalProps {
    visible?: boolean;
    mountNode?: Element;
    time?: number;
    children?: Children;
}
