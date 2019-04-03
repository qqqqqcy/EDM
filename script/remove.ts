import { platform } from 'os';
const EOL = platform() === 'win32' ? '\r\n' : '\n';
import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';

function getProjectUrl(...str: string[]) {
    return path.join(__dirname, '../', ...str);
}

const cpInfo: Pick<CpInfo, 'name'> = { name: '' };
interface CpInfo {
    name: string;
    confirm: boolean;
}

async function userInput() {
    const structureUrl = getProjectUrl('examples', 'until', 'structure.ts');
    const structure = fs.readFileSync(structureUrl, 'utf8');
    const reg = new RegExp(/name: '(\w)*/gm);
    const cpList = (structure.match(reg) || []).map(item => item.replace("name: '", ''));
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'name',
                choices: cpList,
                message: "Please selecte Component's name:",
            },
            {
                type: 'confirm',
                name: 'confirm',
                message: 'Are you sure you want to delete it?',
                default: false,
            },
        ])
        .then(({ name, confirm }: CpInfo) => {
            if (confirm) {
                console.log('删！');
                console.log(name);
            } else {
                throw '> Canceled';
            }
            cpInfo.name = name;
        });
}

function deleteFolderRecursive(path: string) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function(file) {
            var curPath = path + '/' + file;
            if (fs.statSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

function removeTemplate() {
    return new Promise((res, rej) => {
        try {
            const { name } = cpInfo;
            const NameUrl = ['component', name];
            deleteFolderRecursive(getProjectUrl(...NameUrl));
            res();
        } catch (err) {
            console.log('remove template fail !');
            rej(err);
        }
    });
}

function deleteCode(name: string, content: string): string {
    return content
        .split(EOL)
        .filter(item => !(item.includes(`'./${name}'`) || item.includes(`./${name}/`) || item.includes(`'${name}',`)))
        .join(EOL);
}

function removeTemplateInCode() {
    const { name } = cpInfo;
    const indexUrl = getProjectUrl('component', 'index.tsx');
    const styleUrl = getProjectUrl('component', 'style', 'index.scss');
    const structureUrl = getProjectUrl('examples', 'until', 'structure.ts');

    const componentIndex = fs.readFileSync(indexUrl, 'utf8');
    const componentStyle = fs.readFileSync(styleUrl, 'utf8');
    const structure = fs.readFileSync(structureUrl, 'utf8');

    const newIndex = deleteCode(name, componentIndex);
    const newStyle = deleteCode(name, componentStyle);
    const newStructure = deleteCode(name, structure);

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
        removeTemplateInCode();
        removeTemplate();
        console.log('> Congratulations, remove component success !!!');
    } catch (err) {
        console.log(err);
    }
})();
