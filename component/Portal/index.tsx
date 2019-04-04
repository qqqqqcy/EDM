/* eslint-disable react-hooks/rules-of-hooks */
import ReactDOM from 'react-dom';
import { PortalPropsWithChildren } from './PropsType';

const Portal = (props: PortalPropsWithChildren) => {
    const { _mountNode = document.body, children } = props;
    // const [show, useShow]: UseType<boolean> = React.useState(_visible);
    // // timer 放函数外面会导致不同组件相互影响，放里面每次状态刷新都会生成新的作用域。因此需要单独设置一个 state
    // const [timer, useTimer]: UseType<number> = React.useState(0);
    // React.useEffect(() => {
    //     window.clearTimeout(timer);
    //     if (!_visible) {
    //         if (_time) {
    //             useTimer(window.setTimeout(() => useShow(false), _time));
    //         } else {
    //             useShow(false);
    //         }
    //     } else {
    //         console.log('useShow');
    //         useShow(true);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [_visible]);
    let legalMountNode: Element;
    if (!_mountNode) {
        console.log(`Can not find _mountNode[${_mountNode}], so use document.body`);
        legalMountNode = document.body;
    } else {
        legalMountNode = _mountNode;
    }
    return children ? ReactDOM.createPortal(children, legalMountNode) : null;
};
export default Portal;
