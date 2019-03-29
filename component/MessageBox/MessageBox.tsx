import React from 'react';
// import { createPortal } from "react-dom";
import { MessageBoxProps, MessageBoxState } from './PropsType';

// import { CSSTransition } from "react-transition-group";
import TransitionWrap from '../common/TransitionWrap';
import Portal from '../common/Portal';
import './style.scss';

export default class MessageBox extends React.PureComponent<MessageBoxProps, MessageBoxState> {
    static defaultProps = {
        title: '',
        cover: true,
        className: '',
        visible: false,
        handleClickCover: () => {},
        handleCloseClick: '',
    };

    node: HTMLElement;
    constructor(props: MessageBoxProps) {
        super(props);
        const doc = window.document;
        this.node = doc.createElement('div');
        doc.body.appendChild(this.node);
        this.state = {
            visible: false,
        };
    }

    componentWillReceiveProps(nextProps: MessageBoxProps) {
        if ('visible' in nextProps && this.props.visible !== nextProps.visible) {
            this.setState({
                visible: nextProps.visible,
            });
        }
    }

    handleClickCover = (event: any) => {
        this.props.clear();
        // 防止事件穿透
        if (!event.target.className.includes('jui-MessageBox')) {
            return;
        }
        const { handleClickCover } = this.props;
        if (handleClickCover) {
            return handleClickCover();
        }
    };

    render() {
        const { visible } = this.state;
        const { cover, className, title, handleCloseClick } = this.props;
        return (
            // todo className
            <Portal>
                <TransitionWrap visible={visible} time={200} transitionClassName="jui-MessageBox">
                    <div className={`jui-MessageBox ${className || ''}`}>
                        {cover ? <div className="jui-MessageBox-cover" onClick={this.handleClickCover} /> : null}
                        <div className="jui-MessageBox-body">
                            {handleCloseClick ? (
                                <i onClick={handleCloseClick} className="jui-MessageBox-closeBtn" />
                            ) : (
                                ''
                            )}
                            {title ? <p className="jui-MessageBox-title">{title}</p> : null}
                            {this.props.children}
                        </div>
                    </div>
                </TransitionWrap>
                ,
            </Portal>
        );
    }
}
