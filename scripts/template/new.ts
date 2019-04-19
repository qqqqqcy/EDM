import fs from 'fs';
import components from '../../examples/until/components';
/**
 * A collection of common interactive command line user interfaces.
 * @ref https://github.com/SBoudrias/Inquirer.js
 * @doc_zh https://juejin.im/entry/5937c73cac502e0068cf1171
 */
import inquirer from 'inquirer';

import { getProjectUrl, EOL } from '../helpers';

const cpInfo: CpInfo = { name: '', type: '' };
const cp: CP = {
    index: '',
    PropsType: '',
    styleScss: '',
    styleTsx: '',
    demoDemo: '',
    demoIndex: '',
    demoReadme: '',
    testIndex: '',
    testDemo: '',
};

interface CpInfo {
    name: string;
    type: string;
}
interface CP {
    index: string;
    PropsType: string;
    styleScss: string;
    styleTsx: string;
    demoDemo: string;
    demoIndex: string;
    demoReadme: string;
    testIndex: string;
    testDemo: string;
}
async function userInput() {
    // const typeList = JSON.parse(typeListSource);
    const typeObject: {
        [key: string]: boolean;
    } = {};
    components.map((item: { name: string; type: string }) => (typeObject[item.type] = true));
    // cnt: Create a new type
    const cnt = 'Create a new type';
    const typeList = [...Object.keys(typeObject), cnt];
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please input Component's name:",
                default: 'NewComponent',
            },
            {
                type: 'list',
                name: 'type',
                message: "Please choic Component's type:",
                choices: typeList,
                default: 'type1',
            },
            {
                when: ({ type }) => type === cnt,
                type: 'input',
                name: 'type',
                message: "Please input Type's name:",
                default: 'NewType',
            },
        ])
        .then(({ name, type }: CpInfo) => {
            if (fs.existsSync(getProjectUrl('component', name))) {
                console.log(
                    'The component already exists. Please rename the component or delete the existing component.',
                );
                throw 'fail !';
            }
            name = name[0].toUpperCase() + name.slice(1, 9999);
            components.push({ name, type });
            cpInfo.name = name;
            cpInfo.type = type;
        });
}

function getTemplate() {
    return new Promise((res, rej) => {
        try {
            const { name } = cpInfo;

            const cpUrl = ['scripts', 'template', 'NAME'];
            cp.index = fs
                .readFileSync(getProjectUrl(...cpUrl, 'index.tsx'), 'utf8')
                .replace(/-NAME/g, `-${name.toLowerCase()}`)
                .replace(/NAME/g, name);
            cp.PropsType = fs.readFileSync(getProjectUrl(...cpUrl, 'PropsType.tsx'), 'utf8').replace(/NAME/g, name);

            const StyleUrl = ['scripts', 'template', 'NAME', 'style'];
            cp.styleScss = fs
                .readFileSync(getProjectUrl(...StyleUrl, 'index.scss'), 'utf8')
                .replace(/NAME/g, name.toLowerCase());
            cp.styleTsx = fs.readFileSync(getProjectUrl(...StyleUrl, 'index.tsx'), 'utf8');

            const DemoUrl = ['scripts', 'template', 'NAME', 'demo'];
            cp.demoDemo = fs.readFileSync(getProjectUrl(...DemoUrl, 'demo.tsx'), 'utf8').replace(/NAME/g, name);
            cp.demoIndex = fs.readFileSync(getProjectUrl(...DemoUrl, 'index.tsx'), 'utf8').replace(/NAME/g, name);
            cp.demoReadme = fs.readFileSync(getProjectUrl(...DemoUrl, 'readme.md'), 'utf8').replace(/NAME/g, name);

            const TestUrl = ['scripts', 'template', 'NAME', '__tests__'];
            cp.testDemo = fs.readFileSync(getProjectUrl(...TestUrl, 'demo.test.tsx'), 'utf8').replace(/NAME/g, name);
            cp.testIndex = fs.readFileSync(getProjectUrl(...TestUrl, 'index.test.tsx'), 'utf8').replace(/NAME/g, name);
            res();
        } catch (err) {
            rej(err);
        }
    });
}

function setTemplate() {
    return new Promise((res, rej) => {
        try {
            const { name } = cpInfo;

            const NameUrl = ['component', name];
            fs.mkdirSync(getProjectUrl(...NameUrl));
            fs.writeFileSync(getProjectUrl(...NameUrl, 'index.tsx'), cp.index, 'utf8');
            fs.writeFileSync(getProjectUrl(...NameUrl, 'PropsType.tsx'), cp.PropsType, 'utf8');

            const StyleUrl = ['component', name, 'style'];
            fs.mkdirSync(getProjectUrl(...StyleUrl));
            fs.writeFileSync(getProjectUrl(...StyleUrl, 'index.scss'), cp.styleScss, 'utf8');
            fs.writeFileSync(getProjectUrl(...StyleUrl, 'index.tsx'), cp.styleTsx, 'utf8');

            const DemoUrl = ['component', name, 'demo'];
            fs.mkdirSync(getProjectUrl(...DemoUrl));
            fs.writeFileSync(getProjectUrl(...DemoUrl, 'demo.tsx'), cp.demoDemo, 'utf8');
            fs.writeFileSync(getProjectUrl(...DemoUrl, 'index.tsx'), cp.demoIndex, 'utf8');
            fs.writeFileSync(getProjectUrl(...DemoUrl, 'readme.md'), cp.demoReadme, 'utf8');

            const TestUrl = ['component', name, '__tests__'];
            fs.mkdirSync(getProjectUrl(...TestUrl));
            fs.writeFileSync(getProjectUrl(...TestUrl, 'demo.test.tsx'), cp.testDemo, 'utf8');
            fs.writeFileSync(getProjectUrl(...TestUrl, 'index.test.tsx'), cp.testIndex, 'utf8');

            res();
        } catch (err) {
            console.log('setTemplate fail !');
            rej(err);
        }
    });
}

function addTemplateInCode() {
    const { name } = cpInfo;

    const indexUrl = getProjectUrl('component', 'index.tsx');
    const componentIndex = fs.readFileSync(indexUrl, 'utf8');
    const newIndex = componentIndex + `export { default as ${name} } from './${name}';` + EOL;
    fs.writeFileSync(indexUrl, newIndex, 'utf8');

    const styleUrl = getProjectUrl('component', 'scss.tsx');
    const componentStyle = fs.readFileSync(styleUrl, 'utf8');
    const newStyle = componentStyle + `import './${name}/style';` + EOL;
    fs.writeFileSync(styleUrl, newStyle, 'utf8');

    const typeListUrl = getProjectUrl('examples', 'until', 'components.tsx');
    fs.writeFileSync(typeListUrl, `export default ${JSON.stringify(components)}`, 'utf8');
}

/**
 * Main
 */
(async () => {
    try {
        await userInput();
        await getTemplate();
        await setTemplate();
        addTemplateInCode();
        console.log('> Congratulations, create component success !!!');
    } catch (err) {
        console.log(err);
    }
})();
