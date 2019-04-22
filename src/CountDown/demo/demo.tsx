import React from 'react';
import { CountDown } from '@src/index';
const Demo = () => {
    const endData = new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000);
    const cFun = () => {
        console.log('倒计时结束');
    };
    window.localStorage.clear();
    return (
        <div>
            <div>
                <h5>倒计时1天</h5>
                <CountDown endDate={endData} eUnit={['天', '时', '分', '秒']} etype={4} id="edm_1" />
                <h5>倒计时180秒</h5>
                <CountDown endDate={180} eUnit={[':', ':']} etype={3} id="edm_2" />
                <h5>倒计时307秒</h5>
                <CountDown endDate={307} eUnit={[':', ':']} etype={3} id="edm_3" />
                <h5>倒计时120秒</h5>
                <CountDown endDate={120} etype={1} id="edm_4" />
                <h5>倒计时5秒</h5>
                <CountDown endDate={5} etype={1} id="edm_5" eTimeUp={cFun} />
            </div>
        </div>
    );
};

export default Demo;
