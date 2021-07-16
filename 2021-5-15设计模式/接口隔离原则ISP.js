// ISP - 隔离胖接口
// 目标： 使用多个专业的接口比使用单个胖接口好

// 需求
// 游戏中台 - 快速地开发产出游戏
// PUBG、 LOL， run、shot、mega

class Game {
    constructor(name) {
        this.name = name;
    }
    run() {
        // 跑
    }
    shot() {
        // 开枪
    }
    mega() {
        // 开大
    }
}

class PUBG extends Game {
    constructor() {
        // PUBG constructor
    }
}

class LOL extends Game {
    constructor() {
        // LOL constructor
    }
}

pubg = new PUBG('pubg');
pubg.run();
pubg.shot();
// pubg.mega();

lol = new LOL('lol');
lol.run();
// lol.shot();
lol.mega();

// 重构 - 胖接口拆分，下放非全局方法
class Game {
    constructor(name) {
        this.name = name;
    }
    run() {
        // 跑
    }
}

class PUBG extends Game {
    constructor() {
        // PUBG constructor
    }
    shot() {
        // 开枪
    }
}

class LOL extends Game {
    constructor() {
        // LOL constructor
    }
    mega() {
        // 开大
    }
}
