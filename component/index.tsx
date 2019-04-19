const ENV = process.env.NODE_ENV;
if (
    // gulpfile.ts will delete 'false &&' when modules === undefined
    false &&
    ENV !== 'production' &&
    ENV !== 'test' &&
    typeof console !== 'undefined' &&
    console.warn &&
    typeof window !== 'undefined'
) {
    console.warn(
        'You are using a whole package of EDM, ' +
            'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
    );
}
export { default as Button } from './Button';
export { default as Icon } from './Icon';
// export { default as MessageBox } from './MessageBox';
export { default as TouchFeedback } from './TouchFeedback';
export { default as Portal } from './Portal';
export { default as TransitionWrap } from './TransitionWrap';
export { default as CountDown } from './CountDown';
export { default as Popover } from './Popover';
