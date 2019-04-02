import React from 'react';
import classnames from 'classnames';
import { TouchFeedbackPropsWithChildren } from './PropsType';

const TouchFeedback = (props: TouchFeedbackPropsWithChildren) => {
    const { children, _disabled = false, _activeStyle = {}, _activeClassName = '' } = props;

    const [active, setActive]: UseType<boolean> = React.useState(false);

    const triggerEvent = (
        type: string,
        isActive: boolean,
        ev: React.MouseEvent<Element> | React.TouchEvent<Element>,
    ) => {
        const eventType = `on${type}`;
        if (children.props[eventType]) {
            children.props[eventType](ev);
        }

        if (isActive !== active) {
            setActive(!active);
        }
    };
    const onTouchStart: React.TouchEventHandler = e => {
        triggerEvent('TouchStart', true, e);
    };

    const onTouchMove: React.TouchEventHandler = e => {
        triggerEvent('TouchMove', false, e);
    };

    const onTouchEnd: React.TouchEventHandler = e => {
        triggerEvent('TouchEnd', false, e);
    };
    const onTouchCancel: React.TouchEventHandler = e => {
        triggerEvent('TouchCancel', false, e);
    };
    // pc simulate mobile
    const onMouseDown: React.MouseEventHandler = e => {
        triggerEvent('MouseDown', true, e);
    };
    const onMouseUp: React.MouseEventHandler = e => {
        triggerEvent('MouseUp', false, e);
    };
    const onMouseLeave: React.MouseEventHandler = e => {
        triggerEvent('MouseLeave', false, e);
    };

    const events = _disabled
        ? undefined
        : {
              onTouchStart,
              onTouchMove,
              onTouchEnd,
              onTouchCancel,
              onMouseDown,
              onMouseUp,
              onMouseLeave,
          };
    const child = React.Children.only(children);

    if (!_disabled && active) {
        let { style, className } = child.props;
        if (_activeStyle !== false) {
            if (_activeStyle) {
                style = { ...style, ..._activeStyle };
            }
            className = classnames(className, _activeClassName);
        }
        return React.cloneElement(child, {
            className,
            style,
            ...events,
        });
    }
    return React.cloneElement(child, events);
};
export default TouchFeedback;
