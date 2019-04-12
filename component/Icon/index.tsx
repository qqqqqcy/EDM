import React from 'react';
import { IconProps } from './PropsType';
import './importAll';
import classnames from 'classnames';
const prefixCls = `edm-icon`;

const Icon = (props: IconProps) => {
    const { value, size = 'middle', className, ...restProps } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}-${size}`);
    return (
        <svg {...restProps} aria-hidden="true" className={cls}>
            <use xlinkHref={`#${value}`} />
        </svg>
    );
};

export default Icon;
