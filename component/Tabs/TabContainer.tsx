import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { TabContainerProps } from './PropsType';

import prefix from '../_util/prefix';
const prefixCls = `${prefix}-tab-container`;

export const TabContainer = (props: TabContainerProps) => {
    const { children, className, index, activeIndex, ...restProps } = props;
    const [activeIndexCopy, setActiveIndexCopy] = useState(activeIndex);
    const styleClass = classNames(
        {
            [`${prefixCls}-active`]: index === activeIndexCopy,
        },
        className,
    );

    useEffect(() => {
        setActiveIndexCopy(activeIndex);
    }, [activeIndex]);

    return (
        <div className={styleClass} {...restProps}>
            {children}
        </div>
    );
};
