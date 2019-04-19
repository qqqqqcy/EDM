import React from "react";
import { TransitionWrapProps } from "../PropsType";
interface TransitionWrapPropsWithChildren extends TransitionWrapProps {
    children: React.ReactElement | React.ReactElement[];
}
declare const _default: React.FunctionComponent<Partial<Required<Pick<TransitionWrapPropsWithChildren, "time" | "visible" | "transitionClassName" | "unmountOnExit" | "onEntry" | "onEntryDone" | "onExitDone">>> & Required<Pick<Required<TransitionWrapPropsWithChildren>, "children">>>;
export default _default;
