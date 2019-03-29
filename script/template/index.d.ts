declare var $PREFIX: string;
declare module '@component/index' {
    export const NAME: any;
}

declare module '!!raw-loader!*' {
    const contents: string;
    export = contents;
}
