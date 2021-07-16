// LSP - 子类可以覆盖父类
// 目标： 父类能够出现的地方，子类就一定能替代

// sprint1
// 需求： 跨平台游戏 pc & mobile
class Game {
    start() {
        //开始
    }
    shutdown() {
        // 退出
    }
    play() {
        // 开始游戏
    }
}

let game = new Game();
game.play();

class MobileGame extends Game {
    tombStone() {
        // 墓碑
    }
    play() {
        // 开始移动端游戏
    }
}
let mobile = new MobileGame();
mobile.play();

// 重构 - 复用性比较差、分离模块
// 游戏全中台
class Game {
    start() {
        // 开始
    }
    shutdown() {
        // 退出
    }
}
class MobileGame extends Game {
    tombStone() {
        // 墓碑
    }
    play() {
        // 开始移动端游戏
    }
}
class PcGame extends Game {
    speed() {
        // 加速器
    }
    play() {
        // 开始游戏
    }
}
