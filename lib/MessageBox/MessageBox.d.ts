import React from "react";
import { MessageBoxProps, MessageBoxState } from "./PropsType";
import "./style.scss";
export default class MessageBox extends React.PureComponent<MessageBoxProps, MessageBoxState> {
    static defaultProps: {
        title: string;
        cover: boolean;
        className: string;
        visible: boolean;
        handleClickCover: () => void;
        handleCloseClick: string;
    };
    node: HTMLElement;
    constructor(props: MessageBoxProps);
    componentWillReceiveProps(nextProps: MessageBoxProps): void;
    handleClickCover: (event: any) => void;
    render(): JSX.Element;
}
