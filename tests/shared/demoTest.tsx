// import glob from 'glob';
import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import React from 'react';

export default function webDemoTest(componentName: string) {
    test(`renders ${componentName} correctly`, () => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const Demo: React.SFC = require(`../../component/${componentName}/demo/demo`).default;
        expect(renderToJson(render(<Demo />))).toMatchSnapshot();
    });
}
