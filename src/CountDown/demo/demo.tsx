import React from 'react';
import { CountDown } from '../CountDownRed';
const Demo = () => {
    const endData = new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000);
    const cFun = () => {
        console.log('倒计时结束');
    };
    window.localStorage.clear();
    return (
        <div>
            <div>
                {/* <h5>倒计时1天</h5>
                <CountDown endDate={endData} unit={['天', '时', '分', '秒']} type={4} />
                <h5>倒计时180秒</h5>
                <CountDown endDate={180} unit={[':', ':']} type={3} />
                <h5>倒计时307秒</h5>
                <CountDown endDate={307} unit={[':', ':']} type={3} />
                <h5>倒计时120秒</h5>
                <CountDown type={1} endDate={120} /> */}
                <h5>倒计时5秒</h5>
                <CountDown type={1} endDate={50} timeUp={cFun} />
            </div>
        </div>
    );
};

export default Demo;
