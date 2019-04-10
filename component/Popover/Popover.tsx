import React from 'react';
import classnames from 'classnames';
import Portal from '@component/Portal';
import { PopoverPropsType } from './PropsType';

const prefixCls = `${$PREFIX}-popover`;

export const Popover = (props: PopoverPropsType) => {
    const { children, className = '', _onClose = () => {}, _visible, _arrow = true } = props;
    const cls = classnames(prefixCls, className);

    return (
        <Portal _visible={_visible}>
            <div className={cls}>
                <div className={`${prefixCls}-mask`} onClick={_onClose} />
                <div className={`${prefixCls}-inner`} style={{ padding: 'px' }}>
                    {_arrow ? <div className={`${prefixCls}-arrow`} /> : ''}
                    <div className={`${prefixCls}-inner-wrapper`}>{children}</div>
                </div>
            </div>
        </Portal>
    );
};
