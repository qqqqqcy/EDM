import React, { useState } from 'react';
import classnames from 'classnames';
import { TabsGroupProps } from './PropsType';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-tab-group`;

export const TabsGroup = (props: TabsGroupProps) => {
    const {
        animated,
        activeIndex,
        centerMode,
        children,
        className,
        position = 'top',
        onChange,
        scrollable,
        ...restProps
    } = props;

    const [activeIndexCopy, setActiveIndexCopy] = useState(activeIndex);
    console.log(activeIndexCopy);

    const handleChange = (activeIndex: any) => {
        setActiveIndexCopy(activeIndex);
        onChange && onChange(activeIndex);
    };

    let wrapper: any;

    const getRef = (node: any) => {
        wrapper = node;
    };

    const navChildren: any = [],
        containerChildren: any = [],
        otherChild: any = [];
    let num = 0;
    React.Children.forEach(children, (child: any, index: number) => {
        const type: any = child.type;
        const fnName = type.name;
        const props: any = { ...child.props };
        props.key = index;
        if (fnName === 'Tabs') {
            console.log(centerMode);
            props.activeIndex = activeIndex;
            props.onChange = handleChange;
            props.position = position;
            props.centerMode = centerMode;
            props.scrollable = scrollable;
            navChildren.push(React.cloneElement(child, props));
        } else if (fnName === 'TabContainer') {
            props.index = num;
            props.activeIndex = activeIndex;
            containerChildren.push(React.cloneElement(child, props));
            num++;
        } else {
            otherChild.push(React.cloneElement(child, props));
        }
    });

    console.log(centerMode);
    const x = wrapper ? -(wrapper as any).offsetWidth * activeIndex! : 0;
    const y = wrapper ? -(wrapper as any).offsetHeight * activeIndex! : 0;
    const horizontal = position === 'left' || position === 'right';
    const wrapperStyles = {
        transform: !horizontal ? `translate3d(${x}px, 0, 0)` : `translate3d(0, ${y}px, 0)`,
        WebkitTransform: !horizontal ? `translate3d(${x}px, 0, 0)` : `translate3d(0, ${y}px, 0)`,
        msTransform: !horizontal ? `translate3d(${x}px, 0, 0)` : `translate3d(0, ${y}px, 0)`,
        WebkitTransition: animated ? '-webkit-transform .3s cubic-bezier(0.35, 0, 0.25, 1)' : '',
        transition: animated ? 'transform .3s cubic-bezier(0.35, 0, 0.25, 1)' : '',
    };

    const styleClass = classnames(prefixCls, `${prefixCls}-${position}`, className);
    return (
        <div className={styleClass} {...restProps}>
            {navChildren}
            <div className="bm-TabsContainerBox" ref={getRef}>
                <div className="bm-TabsContainerWrapper" style={wrapperStyles}>
                    {containerChildren}
                </div>
            </div>
            {otherChild}
        </div>
    );
};
