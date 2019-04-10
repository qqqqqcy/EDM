import React from 'react';
import classnames from 'classnames';
import Portal from '@component/Portal';
import { PopoverPropsType } from './PropsType';

const prefixCls = `${$PREFIX}-popover`;

export const Popover = (props: PopoverPropsType) => {
    const { children, className = '', onClose = () => {}, _visible, arrow = true } = props;
    const cls = classnames(prefixCls, className);

    const getPopoverRef = (node: any) => {
        this.transitionEl = ReactDOM.findDOMNode(node);
        this.setElPositionStyle(this.transitionEl);
    };

    return (
        <Portal _visible={_visible}>
            <div className={cls}>
                <div className={`${prefixCls}-mask`} onClick={onClose} />
                <div className={`${prefixCls}-inner`}>
                    {arrow ? <div className={`${prefixCls}-arrow`} /> : ''}
                    <div className={`${prefixCls}-inner-wrapper`}>{children}</div>
                </div>
            </div>
        </Portal>
    );
};
