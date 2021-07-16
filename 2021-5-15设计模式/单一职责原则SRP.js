// SRP - 通过解耦让模块更加独立
// 目标： 一个模块只能做一件事

// sprint
// 需求： game store 设计开发结算模块
class PUBGManager {
    // 弹出结算框
    openDialog() {
        // 计算金额
        setPrice();
    }
}

const game = new PUBGManager();
game.openDialog();  // 弹窗 < = > setPrice 耦合

// 重构
// 拆分计算金额和结算弹框
// gameManager.js
class PUBGManager {
    constructor(command) {
        this.command = command;
    }
    openDialog(price) {
        // 计算金额
        this.command.setPrice(price);
    }
}

class PriceManager {
    setPrice(price) {
        // 计算金额
    }
}

const exe = new PriceManager();
const game = new PUBGManager(exe);
game.openDialog(15);
exe.setPrice(10);
