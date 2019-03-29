import fs from 'fs';
import path from 'path';
/**
 * A collection of common interactive command line user interfaces.
 * @ref https://github.com/SBoudrias/Inquirer.js
 * @doc_zh https://juejin.im/entry/5937c73cac502e0068cf1171
 */
import inquirer from 'inquirer';

function getProjectUrl(...str: string[]) {
    return path.join(__dirname, '../', ...str);
}

const cpInfo: CpInfo = { name: '', type: '' };
const cp: CP = { index: '', PropsType: '', style: '', _demo: '', _index: '', _readme: '' };

interface CpInfo {
    name: string;
    type: string;
}
interface CP {
    index: string;
    PropsType: string;
    style: string;
    _demo: string;
    _index: string;
    _readme: string;
}
async function userInput() {
    const typeListUrl = getProjectUrl('script', 'typeList.json');
    const typeListSource = fs.readFileSync(typeListUrl, 'utf8');
    const typeList = JSON.parse(typeListSource);
    // cnt: Create a new type
    const cnt = [...typeList].pop();
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
            if (typeList.indexOf(type) === -1) {
                fs.writeFileSync(typeListUrl, typeListSource.replace(`"${cnt}"`, `"${type}", "${cnt}"`), 'utf8');
            }
            name = name[0].toUpperCase() + name.slice(1, 9999);
            cpInfo.name = name;
            cpInfo.type = type;
        });
}

function getTemplate() {
    return new Promise((res, rej) => {
        try {
            const { name } = cpInfo;
            const cpUrl = ['script', 'template', 'NAME'];
            const DemoUrl = ['script', 'template', 'NAME', 'demo'];
            cp.index = fs
                .readFileSync(getProjectUrl(...cpUrl, 'index.tsx'), 'utf8')
                .replace(/-NAME/g, `-${name.toLowerCase()}`)
                .replace(/NAME/g, name);
            cp.PropsType = fs.readFileSync(getProjectUrl(...cpUrl, 'PropsType.ts'), 'utf8').replace(/NAME/g, name);
            cp.style = fs
                .readFileSync(getProjectUrl(...cpUrl, 'style.scss'), 'utf8')
                .replace(/NAME/g, name.toLowerCase());
            cp._demo = fs.readFileSync(getProjectUrl(...DemoUrl, 'demo.tsx'), 'utf8').replace(/NAME/g, name);
            cp._index = fs.readFileSync(getProjectUrl(...DemoUrl, 'index.ts'), 'utf8').replace(/NAME/g, name);
            cp._readme = fs.readFileSync(getProjectUrl(...DemoUrl, 'readme.md'), 'utf8').replace(/NAME/g, name);
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
            const DemoUrl = ['component', name, 'demo'];
            fs.mkdirSync(getProjectUrl(...NameUrl));
            fs.mkdirSync(getProjectUrl(...DemoUrl));
            fs.writeFileSync(getProjectUrl(...NameUrl, 'index.tsx'), cp.index, 'utf8');
            fs.writeFileSync(getProjectUrl(...NameUrl, 'PropsType.ts'), cp.PropsType, 'utf8');
            fs.writeFileSync(getProjectUrl(...NameUrl, 'style.scss'), cp.style, 'utf8');
            fs.writeFileSync(getProjectUrl(...DemoUrl, 'demo.tsx'), cp._demo, 'utf8');
            fs.writeFileSync(getProjectUrl(...DemoUrl, 'index.ts'), cp._index, 'utf8');
            fs.writeFileSync(getProjectUrl(...DemoUrl, 'readme.md'), cp._readme, 'utf8');
            res();
        } catch (err) {
            console.log('setTemplate fail !');
            rej(err);
        }
    });
}

function addTemplateInCode() {
    const { name, type } = cpInfo;
    const indexUrl = getProjectUrl('component', 'index.tsx');
    const styleUrl = getProjectUrl('component', 'style', 'index.scss');
    const structureUrl = getProjectUrl('examples', 'until', 'structure.ts');

    const componentIndex = fs.readFileSync(indexUrl, 'utf8');
    const componentStyle = fs.readFileSync(styleUrl, 'utf8');
    const structure = fs.readFileSync(structureUrl, 'utf8');

    const newIndex = componentIndex + `export { default as ${name} } from './${name}';` + '\n';
    const newStyle = componentStyle + `@import '../${name}/style.scss';` + '\n';
    const newStructure = structure.replace(
        '// Anchor point',
        `{ name: '${name}', type: '${type}' },` + '\r\n' + '    // Anchor point',
    );

    fs.writeFileSync(indexUrl, newIndex, 'utf8');
    fs.writeFileSync(styleUrl, newStyle, 'utf8');
    fs.writeFileSync(structureUrl, newStructure, 'utf8');
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
