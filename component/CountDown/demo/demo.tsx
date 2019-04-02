import React from 'react';
import { default as CountDown } from '@component/CountDown';
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
                <CountDown _endDate={endData} _eUnit={['天', '时', '分', '秒']} _etype={4} id="edm_1" />
                <h5>倒计时180秒</h5>
                <CountDown _endDate={180} _eUnit={[':', ':']} _etype={3} id="edm_2" />
                <h5>倒计时307秒</h5>
                <CountDown _endDate={307} _eUnit={[':', ':']} _etype={3} id="edm_3" />
                <h5>倒计时120秒</h5>
                <CountDown _endDate={120} _etype={1} id="edm_4" />
                <h5>倒计时5秒</h5>
                <CountDown _endDate={5} _etype={1} id="edm_5" _eTimeUp={cFun} />
            </div>
        </div>
    );
};

export default Demo;
