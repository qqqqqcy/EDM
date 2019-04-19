/// <reference types="react" />
import { TouchFeedbackProps, TransitionWrapProps, PortalProps } from "./PropsType";
export declare const touchFeedbackProps: Required<TouchFeedbackProps>;
export declare const transitionWrapProps: Required<TransitionWrapProps>;
export declare const portalProps: Required<PortalProps>;
declare const _default: <P extends object, DP extends Partial<P> = Partial<P>>(defaultProps: DP, Cmp: import("react").FunctionComponent<P>) => import("react").FunctionComponent<Partial<DP> & Required<Pick<P, Exclude<keyof P, keyof DP>>>>;
export default _default;
