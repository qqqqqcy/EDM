/// <reference types="react" />
export declare type Children = React.ReactNode;
export declare type ReactChildren = React.ReactElement;
export declare type Style = React.CSSProperties;
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
export declare type TransitionStatus = "entry" | "entry-active" | "entry-done" | "exit" | "exit-active" | "exit-done";
export interface PortalProps {
    visible?: boolean;
    mountNode?: Element;
    time?: number;
    children?: Children;
}
