import React from 'react';
import classnames from 'classnames';
import { NAMEProps } from './PropsType';
const prefixCls = `${$PREFIX}-NAME`;

const NAME = (props: NAMEProps) => {
    const { _prop = 'default', className, children, ...restProps } = props;
    const cls = classnames(prefixCls, className);
    return (
        <div {...restProps} className={cls}>
            {_prop} | {children}
        </div>
    );
};

export default NAME;
