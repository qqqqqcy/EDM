import React from "react";
import { TouchFeedbackProps } from "../PropsType";
interface TouchFeedbackPropsType extends TouchFeedbackProps {
    children: React.ReactElement;
}
declare const _default: React.FunctionComponent<Partial<Required<Pick<TouchFeedbackPropsType, "disabled" | "activeStyle" | "activeClassName">>> & Required<Pick<Required<TouchFeedbackPropsType>, "children">>>;
export default _default;
