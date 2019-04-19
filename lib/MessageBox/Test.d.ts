import React from "react";
interface MessageBoxProps {
    time: number;
    content: string;
}
export default class MessageBoxWrap extends React.PureComponent<MessageBoxProps, {
    v: boolean;
    content: any;
}> {
    constructor(props: any);
    static create: (props: MessageBoxProps) => {
        clear(): any;
        show(obj: any): any;
    };
    clear: () => Promise<{}>;
    show: (obj: any) => Promise<void>;
    render(): JSX.Element;
}
export {};
