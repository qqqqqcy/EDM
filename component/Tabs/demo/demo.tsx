import React from 'react';
import { Tab, Tabs, TabsGroup } from '../index';
import { Icon } from '@component/index';

const Demo = () => {
    return (
        <>
            <TabsGroup centerMode={true}>
                <Tabs>
                    <Tab>
                        <Icon fill="#F00" value="alipay" className="edm-tab-icon" />
                        Home
                    </Tab>
                    <Tab>Home2</Tab>
                    <Tab>Home3</Tab>
                    <Tab>Home4</Tab>
                    <Tab>Home5</Tab>
                    <Tab>Home6</Tab>
                    <Tab>Home7</Tab>
                    <Tab>Home8</Tab>
                    <Tab>Home9</Tab>
                    <Tab>Home10</Tab>
                    <Tab>Home11</Tab>
                </Tabs>
            </TabsGroup>
        </>
    );
};

export default Demo;
