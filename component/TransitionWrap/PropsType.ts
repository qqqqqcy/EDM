export interface TransitionWrapProps {
    visible?: boolean;
    time?: number;
    transitionClassName?: string;
    unmountOnExit?: boolean;
    onExitDone?: () => void;
}

export interface TransitionWrapPropsWithChildren extends TransitionWrapProps {
    children: React.ReactElement | React.ReactElement[];
}

export type TransitionStatus = 'entry' | 'entry-active' | 'entry-done' | 'exit' | 'exit-active' | 'exit-done';
