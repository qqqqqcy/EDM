import React from "react";
import classnames from "classnames";
import { TouchFeedbackProps } from "../PropsType";
import setDefaultProps, { touchFeedbackProps } from "../setDefaultProps";

interface TouchFeedbackPropsType extends TouchFeedbackProps {
  children: React.ReactElement;
}
const defaultProps: GetNullableType<TouchFeedbackPropsType> = {
  ...touchFeedbackProps
};

export default setDefaultProps(
  defaultProps,
  (props: Required<TouchFeedbackPropsType>) => {
    const { children, disabled, activeStyle, activeClassName } = props;

    const [active, setActive]: UseType<boolean> = React.useState(false);
    // const useState = React.useState(false);
    // const active = useState[0];
    // const setActive = useState[1];

    const triggerEvent = (
      type: string,
      isActive: boolean,
      ev: React.MouseEvent<Element> | React.TouchEvent<Element>
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
      triggerEvent("TouchStart", true, e);
    };

    const onTouchMove: React.TouchEventHandler = e => {
      triggerEvent("TouchMove", false, e);
    };

    const onTouchEnd: React.TouchEventHandler = e => {
      triggerEvent("TouchEnd", false, e);
    };
    const onTouchCancel: React.TouchEventHandler = e => {
      triggerEvent("TouchCancel", false, e);
    };
    // pc simulate mobile
    const onMouseDown: React.MouseEventHandler = e => {
      triggerEvent("MouseDown", true, e);
    };
    const onMouseUp: React.MouseEventHandler = e => {
      triggerEvent("MouseUp", false, e);
    };
    const onMouseLeave: React.MouseEventHandler = e => {
      triggerEvent("MouseLeave", false, e);
    };

    const events = disabled
      ? undefined
      : {
          onTouchStart,
          onTouchMove,
          onTouchEnd,
          onTouchCancel,
          onMouseDown,
          onMouseUp,
          onMouseLeave
        };
    const child = React.Children.only(children);

    if (!disabled && active) {
      let { style, className } = child.props;
      if (activeStyle !== false) {
        if (activeStyle) {
          style = { ...style, ...activeStyle };
        }
        className = classnames(className, activeClassName);
      }
      return React.cloneElement(child, {
        className,
        style,
        ...events
      });
    }
    return React.cloneElement(child, events);
  }
);
