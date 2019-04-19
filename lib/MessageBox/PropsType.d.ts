export interface MessageBoxProps {
    visible: boolean;
    /** 是否需要遮罩，默认为 true */
    cover?: boolean;
    /** 点击遮罩关闭 */
    handleClickCover?: () => void;
    /** 自己设置的属性 */
    className?: string;
    /** 标题，不传不展示 */
    title?: string;
    /** 点击关闭回调，为空时不展示关闭按钮 */
    handleCloseClick: (() => void) | undefined;
    clear: () => void;
}
export interface MessageBoxState {
    visible: boolean;
}
