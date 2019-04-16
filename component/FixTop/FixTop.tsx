import React from 'react';
import classnames from 'classnames';
import { FixTopProps } from './PropsType';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-fixtop`;

const FixTop = (props: FixTopProps) => {
    const { prop = 'default', className, children, ...restProps } = props;
    const cls = classnames(prefixCls, className);
    return (
        <div {...restProps} className={cls}>
            {prop} | {children}
        </div>
    );
};

export default FixTop;
