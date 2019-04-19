import React from 'react';
import classnames from 'classnames';
import { TabProps } from './PropsType';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-tab`;

export const Tab = (props: TabProps) => {
    const { className, children, onChange, index, disabled, activeIndex, ...restProps } = props;
    const styleClass = classnames(prefixCls, className, {
        [`${prefixCls}-active`]: activeIndex === index,
        [`${prefixCls}-disabled`]: disabled,
    });

    const handleChange = (e: any) => {
        if (!disabled && onChange) {
            onChange(e);
        }
    };

    return (
        <div className={styleClass} onChange={handleChange} {...restProps}>
            <span className={`${prefixCls}-inner`}>{children}</span>
        </div>
    );
};
