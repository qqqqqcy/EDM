import React from 'react';
import classnames from 'classnames';
import { ButtonProps } from './PropsType';
import TouchFeedback from '../TouchFeedback';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-button`;

const Button = (props: ButtonProps) => {
    const {
        size = 'middle',
        theme = 'default',
        ghost = false,
        radius = true,
        inline = false,
        style,
        disabled,
        className,
        activeStyle,
        activeClassName,
        ...restProps
    } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}-${size}`, `${prefixCls}-${theme}`, {
        [`${prefixCls}-radius`]: radius === true,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-ghost`]: ghost,
        [`${prefixCls}-inline`]: inline,
    });
    return (
        <TouchFeedback
            activeClassName={activeClassName || `${prefixCls}-active`}
            activeStyle={activeStyle}
            disabled={disabled}
        >
            <button
                {...restProps}
                role="button"
                className={cls}
                style={typeof radius === 'string' ? { ...style, borderRadius: radius } : style}
                aria-disabled={disabled}
                disabled={disabled}
            />
        </TouchFeedback>
    );
};

export default Button;
