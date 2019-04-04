export interface PortalProps {
    // _visible?: boolean;
    // _time?: number;
    _mountNode?: Element;
}

export interface PortalPropsWithChildren extends PortalProps {
    children: React.ReactNode;
}
