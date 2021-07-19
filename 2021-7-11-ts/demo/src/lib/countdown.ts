import { EventEmitter } from 'eventemitter3'
import { CountdownEventName } from './countdown_1';

export enum CountDownEventName {
    START = 'start',
    STOP = 'stop',
    RUNNING = 'running'
}

// 倒计时状态
enum CountDownStatus {
    running,
    paused,
    stoped,
}

interface RemainTimeData {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    count: number;//毫秒
}
interface CountDownEventMap {
    [CountDownEventName.START]: [];
    [CountDownEventName.STOP]: [];
    [CountDownEventName.RUNNING]: [RemainTimeData];
}

export function fillZero(num: number) {
    return `0${num}`.slice(-2)
}

export class CountDown extends EventEmitter<CountDownEventMap> {
    //静态属性直接用CountDown.~
    private static COUNT_IN_MILLSECOND: number = 1 * 100;
    private static SECOND_IN_MILLSECOND: number = 10 * CountDown.COUNT_IN_MILLSECOND;//1000毫秒
    private static MINUTE_IN_MILLSECOND: number = 60 * CountDown.SECOND_IN_MILLSECOND;
    private static HOURS_IN_MILLSECOND: number = 60 * CountDown.MINUTE_IN_MILLSECOND;
    private static DAY_IN_MILLSECOND: number = 24 * CountDown.HOURS_IN_MILLSECOND;
    private endTime: number;
    private step: number;
    private remainTime: number = 0;
    private status: CountDownStatus = CountDownStatus.stoped;
    constructor(endTime: number, step: number = 1e3) {
        super();
        this.endTime = endTime;
        this.step = step;
        this.start();//自动调用
    }
    public start() {
        this.emit(CountDownEventName.START)
        this.status = CountDownStatus.running
        this.countdown()
    }
    public stop() {
        this.emit(CountDownEventName.STOP)
        this.status = CountDownStatus.stoped
    }
    private countdown() {
        if (this.status !== CountDownStatus.running) {
            return;//未执行状态
        }
        this.remainTime = Math.max(this.endTime - Date.now(), 0)//为避免取到负数
        this.emit(CountDownEventName.RUNNING, this.parseRemainTime(this.remainTime))//需要两个参数
        if (this.remainTime > 0) {
            //还没有结束
            setTimeout(() => this.countdown(), this.step)//每过多久跳一下
        } else {
            //结束调用stop方法
            this.stop()
        }
    }

    private parseRemainTime(remainTime: number): RemainTimeData {//不写return报错
        //把时间戳改为天时分
        let time = remainTime;
        const days = Math.floor(time / CountDown.DAY_IN_MILLSECOND);
        time = time % CountDown.DAY_IN_MILLSECOND;//剩余毫秒

        const hours = Math.floor(time / CountDown.HOURS_IN_MILLSECOND)
        time = time % CountDown.HOURS_IN_MILLSECOND

        const minutes = Math.floor(time / CountDown.MINUTE_IN_MILLSECOND);
        time = time % CountDown.MINUTE_IN_MILLSECOND

        const seconds = Math.floor(time / CountDown.SECOND_IN_MILLSECOND)
        time = time % CountDown.SECOND_IN_MILLSECOND

        const count = Math.floor(time / CountDown.COUNT_IN_MILLSECOND)
        return {
            days,
            hours,
            minutes,
            seconds,
            count
        }
    }
}
