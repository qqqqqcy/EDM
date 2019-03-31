import React from 'react';
import { IconProps } from './PropsType';
import './importAll';
import classnames from 'classnames';
const prefixCls = `${$PREFIX}-icon`;

const Icon = (props: IconProps) => {
    const { _name, _size = 'middle', className, ...restProps } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}-${_size}`);
    return (
        <svg type="" {...restProps} aria-hidden="true" className={cls}>
            <use xlinkHref={`#${_name}`} />
        </svg>
    );
};

export default Icon;
