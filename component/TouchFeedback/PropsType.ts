export interface TouchFeedbackProps {
    _disabled?: boolean;
    _activeClassName?: string;
    _activeStyle?: React.CSSProperties;
}

export interface TouchFeedbackPropsWithChildren extends TouchFeedbackProps {
    children: React.ReactElement;
}
