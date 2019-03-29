export const directoryStructure: DirectoryStructureItem[] = [
    { name: 'Button', type: 'type1' },
    { name: 'Icon', type: 'type1' },
    { name: 'MessageBox', type: 'type2' },
    { name: 'CountDown', type: 'type2' },
];

export const sortStructure = (structure: DirectoryStructureItem[]) => {
    const newStructure: { [propName: string]: DirectoryStructureItem[] } = {};
    structure.map(item => {
        if (newStructure[item.type]) {
            newStructure[item.type].push(item);
        } else {
            newStructure[item.type] = [item];
        }
    });
    return newStructure;
};

export const getComponent = (item: DirectoryStructureItem) => {
    let temp: any;
    try {
        if (item.type === 'markdownOnly') {
            temp = {
                readme: require('../document/markdown/index')[item.name],
            };
        } else {
            temp = require(`../../component/${item.name}/demo/index`);
        }
    } catch (e) {
        temp = '';
    }
    return temp;
};
