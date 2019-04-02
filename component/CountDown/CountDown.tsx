import React, { useState, useEffect } from 'react';

import { CountDownProps } from './PropsType';
import classnames from 'classnames';
import './style.scss';

const prefixCls = `${$PREFIX}-cdown`;
const STORAGE = window.localStorage || {};
const CDOWN_KEY = 'EDM_CDOWN_KEY';

function CountDown(props: CountDownProps) {
    const { _endDate = 0, _etype = 1, _eUnit = [''], _eTimeUp = () => {}, className, id = 'edm' } = props;
    const cls = classnames(prefixCls, className);

    // 秒转换为时、分、秒
    const getTimeData = (t: any) => {
        let day = 0; // 剩余的天
        let hour = 0; // 剩余的小时
        let min = 0; // 剩余的分钟
        let second = 0; // 剩余的秒
        const type = _etype; // 时间类型

        switch (type) {
            case 4:
                day = Math.floor(t / 86400); // 剩余的天
                hour = Math.floor(t / 3600 - day * 24); // 剩余的小时 已排除天
                min = Math.floor(t / 60 - day * 1440 - hour * 60); // 剩余的分钟 已排除天和小时
                second = Math.floor(t - day * 86400 - hour * 3600 - min * 60); // 剩余的秒
                break;
            case 3:
                hour = Math.floor(t / 3600); // 剩余的小时
                min = Math.floor(t / 60 - hour * 60); // 剩余的分钟 已排小时
                second = Math.floor(t - hour * 3600 - min * 60); // 剩余的秒
                break;
            case 2:
                min = Math.floor(t / 60); // 剩余的分钟
                second = Math.floor(t - min * 60); // 剩余的秒
                break;
            case 1:
                second = Math.floor(t); // 剩余的秒
                break;
            default:
                break;
        }

        const arr = [];
        type >= 4 && arr.push(String(day).padStart(2, '0'));
        type >= 3 && arr.push(String(hour).padStart(2, '0'));
        type >= 2 && arr.push(String(min).padStart(2, '0'));
        arr.push(String(second).padStart(2, '0'));

        return arr;
    };

    // 开始倒计时的当前时间
    const currentTime: number = Math.floor(new Date().getTime() / 1000);

    // 最终的时间 = 当前时间 + 倒计时时间
    const endTime: any = _endDate instanceof Date ? _endDate.getTime() / 1000 : currentTime + _endDate;

    // 存储倒计时的key
    const key = `${id}_${CDOWN_KEY}`;
    let time = STORAGE.getItem(key);
    console.log(time);
    let storageCountDown: any;
    let intervalId: any;

    // this.storageCountDown = Number(STORAGE.getItem(key)); // 获取localStorage当前倒计时时间

    if (!time) {
        storageCountDown = endTime;
        STORAGE.setItem(key, storageCountDown + '');
    } else {
        //如果存在的话，重新赋值
        storageCountDown = Number(STORAGE.getItem(key));
    }

    const initialValue = getTimeData(storageCountDown - currentTime);
    const [timeArray, setTimeArray] = useState(initialValue);

    // function useInterval(callback: any, delay: any) {
    //     const savedCallback = useRef();

    //     // 保存新回调
    //     useEffect(() => {
    //         savedCallback.current = callback;
    //     });

    //     // 建立 interval
    //     useEffect(() => {
    //         function tick() {
    //             let testFun: any = savedCallback.current;
    //             if (testFun) {
    //                 testFun();
    //             }
    //         }
    //         if (delay !== null) {
    //             intervalId = setInterval(tick, delay);
    //             return () => clearInterval(intervalId);
    //         }
    //     }, [delay]);
    // }

    const start = () => {
        const currentTime: number = Math.floor(new Date().getTime() / 1000);
        let t = storageCountDown - currentTime; // 剩余的毫秒数
        let tempArr = getTimeData(t);
        setTimeArray(tempArr);
    };

    useEffect(() => {
        intervalId = setInterval(() => {
            const currentTime: number = Math.floor(new Date().getTime() / 1000);
            if (storageCountDown >= currentTime) {
                start();
            } else {
                clearInterval(intervalId);
                STORAGE.removeItem(key);
                _eTimeUp();
            }
        }, 1000);
    });

    // useInterval(() => {
    //     const currentTime: number = Math.floor(new Date().getTime() / 1000);
    //     if (storageCountDown >= currentTime) {
    //         start();
    //     } else {
    //         clearInterval(intervalId);
    //         STORAGE.removeItem(key);
    //         _eTimeUp();
    //     }
    // }, 1000);

    return (
        <div className={cls}>
            {timeArray.map((time, index) => (
                <span key={index}>
                    {time} {index < _eUnit.length ? _eUnit[index] + ' ' : ''}
                </span>
            ))}
        </div>
    );
}

export default CountDown;
