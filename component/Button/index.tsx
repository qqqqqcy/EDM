import React from 'react';
import classnames from 'classnames';
import { ButtonProps } from './PropsType';
import { TouchFeedback } from '../index';
const prefixCls = `${$PREFIX}-button`;

const Button = (props: ButtonProps) => {
    const {
        _size = 'middle',
        _type = 'default',
        _ghost = false,
        _radius = true,
        _inline = false,
        style,
        disabled,
        className,
        _activeStyle,
        _activeClassName,
        ...restProps
    } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}-${_size}`, `${prefixCls}-${_type}`, {
        [`${prefixCls}-radius`]: _radius === true,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-ghost`]: _ghost,
        [`${prefixCls}-inline`]: _inline,
    });
    return (
        <TouchFeedback
            _activeClassName={_activeClassName || `${prefixCls}-active`}
            _activeStyle={_activeStyle}
            _disabled={disabled}
        >
            <button
                {...restProps}
                role="button"
                className={cls}
                style={typeof _radius === 'string' ? { ...style, borderRadius: _radius } : style}
                aria-disabled={disabled}
                disabled={disabled}
            />
        </TouchFeedback>
    );
};

export default Button;
