import React, { useState } from 'react';

import { CountDownProps } from './PropsType';
import './style.scss';

export default (props: CountDownProps) => {
    const { _endDate = 0, _etype = 4, _eUnit = [':', ':', ':'], _eTimeUp = () => {} } = props;

    const initialValue = ['0'];

    const [timeArray, setTimeArray] = useState(initialValue);

    if (_endDate instanceof Date) {
        this.endTime = _endDate.getTime();
    } else {
        this.endTime = Number(_endDate) > 0 ? Number(_endDate) + new Date().getTime() : 0;
    }

    const start = (isFirst?: boolean) => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            let t = this.endTime - new Date().getTime(); // 剩余的毫秒数
            t = t < 0 ? 0 : t;
            let day = 0; // 剩余的天
            let hour = 0; // 剩余的小时
            let min = 0; // 剩余的分钟
            let second = 0; // 剩余的秒
            const type = Number(_etype);
            if (type >= 4) {
                day = Math.floor(t / 86400000); // 剩余的天
                hour = Math.floor(t / 3600000 - day * 24); // 剩余的小时 已排除天
                min = Math.floor(t / 60000 - day * 1440 - hour * 60); // 剩余的分钟 已排除天和小时
                second = Math.floor(t / 1000 - day * 86400 - hour * 3600 - min * 60); // 剩余的秒
            } else if (type >= 3) {
                hour = Math.floor(t / 3600000); // 剩余的小时
                min = Math.floor(t / 60000 - hour * 60); // 剩余的分钟 已排小时
                second = Math.floor(t / 1000 - hour * 3600 - min * 60); // 剩余的秒
            } else if (type >= 2) {
                min = Math.floor(t / 60000); // 剩余的分钟
                second = Math.floor(t / 1000 - min * 60); // 剩余的秒
            } else {
                second = Math.floor(t / 1000); // 剩余的秒
            }
            const arr = [];
            type >= 4 && arr.push(String(day).padStart(2, '0'));
            type >= 3 && arr.push(String(hour).padStart(2, '0'));
            type >= 2 && arr.push(String(min).padStart(2, '0'));
            arr.push(String(second).padStart(2, '0'));

            setTimeArray(arr);

            if (t > 0) {
                start();
            } else {
                _eTimeUp();
            }
        }, 1000);
    };

    start(true);

    return (
        <div>
            {timeArray.map((time, index) => (
                <span>
                    {time} {index <= _eUnit.length ? _eUnit[index] + ' ' : ''}
                </span>
            ))}
        </div>
    );
};
