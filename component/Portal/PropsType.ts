export interface PortalProps {
    _visible?: boolean;
    _mountNode?: Element;
    _time?: number;
}

export interface PortalPropsWithChildren extends PortalProps {
    children: React.ReactElement;
}
