import React from 'react';
import classnames from 'classnames';
import { TabProps } from './PropsType';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-tab`;

export const Tab = (props: TabProps) => {
    const { className, children, onClick, index, disabled, activeIndex, ...restProps } = props;
    const styleClass = classnames(prefixCls, className, {
        [`${prefixCls}-active`]: activeIndex === index,
        [`${prefixCls}-disabled`]: disabled,
    });

    const handleChange = (index: any) => {
        if (!disabled && onClick) {
            console.log('click2');
            onClick && onClick(index);
        }
    };

    return (
        <div className={styleClass} onClick={handleChange.bind(handleChange, index)} {...restProps} data-index={index}>
            <span className={`${prefixCls}-inner`}>{children}</span>
        </div>
    );
};
