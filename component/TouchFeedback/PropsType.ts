export interface TouchFeedbackProps {
    disabled?: boolean;
    activeClassName?: string;
    activeStyle?: React.CSSProperties;
}

export interface TouchFeedbackPropsWithChildren extends TouchFeedbackProps {
    children: React.ReactElement;
}
