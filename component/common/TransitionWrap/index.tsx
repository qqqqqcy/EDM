import * as React from "react";
import classnames from "classnames";
import { TransitionWrapProps, TransitionStatus } from "../PropsType";
import setDefaultProps, { transitionWrapProps } from "../setDefaultProps";

const defaultProps: GetNullableType<TransitionWrapProps> = {
  ...transitionWrapProps
};

const statusCase: { [propName: string]: TransitionStatus } = {
  entry: "entry",
  entryActive: "entry-active",
  entryDone: "entry-done",
  exit: "exit",
  exitActive: "exit-active",
  exitDone: "exit-done"
};

export default setDefaultProps(
  defaultProps,
  (props: Required<TransitionWrapProps>) => {
    const {
      time,
      visible,
      children,
      onEntry,
      onExitDone,
      onEntryDone,
      unmountOnExit,
      transitionClassName
    } = props;

    const [status, setStatus]: UseType<TransitionStatus> = React.useState(
      visible ? statusCase.entry : statusCase.exit
    );
    const [show, setShow] = React.useState(visible);
    const [timer, useTimer]: UseType<number> = React.useState(0);

    React.useEffect(() => {
      if (!children) {
        return;
      }
      if (visible) {
        if (
          status !== statusCase.entry &&
          status !== statusCase.entryActive &&
          status !== statusCase.entryDone
        ) {
          window.clearTimeout(timer);
          setStatus(statusCase.entry);
          if (!show && unmountOnExit) {
            setShow(true);
          }
        } else if (status === statusCase.entry) {
          onEntry();
          useTimer(
            window.setTimeout(() => setStatus(statusCase.entryActive), 0)
          );
        } else if (status === statusCase.entryActive) {
          useTimer(
            window.setTimeout(() => setStatus(statusCase.entryDone), time)
          );
        } else if (status === statusCase.entryDone) {
          onEntryDone();
        }
      } else {
        if (
          status !== statusCase.exit &&
          status !== statusCase.exitActive &&
          status !== statusCase.exitDone
        ) {
          window.clearTimeout(timer);
          setStatus(statusCase.exit);
        }
        if (status === statusCase.exit) {
          setStatus(statusCase.exitActive);
        } else if (status === statusCase.exitActive) {
          useTimer(
            window.setTimeout(() => setStatus(statusCase.exitDone), time)
          );
        } else if (status === statusCase.exitDone) {
          onExitDone();

          if (show && unmountOnExit) {
            setShow(false);
          }
        }
      }
    }, [visible, status]);

    React.useEffect(() => {
      return () => {
        window.clearTimeout(timer);
        onExitDone();
      };
    }, []);

    if (children && (show || !unmountOnExit)) {
      return (
        <React.Fragment>
          {React.Children.map(children, child => {
            let { className } = child.props;
            if (transitionClassName) {
              className = classnames(
                className,
                `${transitionClassName}-${status}`
              );
            }
            return React.cloneElement(child, { className });
          })}
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
);
