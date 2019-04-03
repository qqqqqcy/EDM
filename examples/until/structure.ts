export const directoryStructure: DirectoryStructureItem[] = [
    { name: 'Icon', type: 'Data Display' },
    { name: 'Button', type: 'Data Entry' },
    { name: 'MessageBox', type: 'Feedback' },
    { name: 'TouchFeedback', type: 'Depth' },
    { name: 'Portal', type: 'Depth' },
    { name: 'TransitionWrap', type: 'Depth' },
    { name: 'CountDown', type: 'Data Display' },
    { name: 'Popover', type: 'Data Display' },
    // Anchor point
    /**
     * Do not delete !
     * anchor positioning is required when creating components
     */
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
