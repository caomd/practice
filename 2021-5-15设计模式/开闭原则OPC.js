// OPC - 对拓展开放、对修改关闭
// 目标： 需要开发的基类核心中，对于后续迭代需要添加的功能开放的、对于直接修改入侵拒绝态度

// sprint1
// 需求： 游戏商店。PUBG - 高亮 LOL- 弹出折扣框

// render
if (game === 'PUBG') {
    // 高亮
} else {
    // normal
}

// event
if (game === 'LOL') {
    // 弹出折扣框
} else {
    // normal
}

// sprint2
// 需求：MHW - 置灰、弹出已下架，之前的促销不变
// render
if (game === 'PUBG') {
    // 高亮
} else if (game === 'MHW') {
    // 置灰
} else {
    // normal
}

// event
if (game === 'LOL') {
    // 弹出折扣框
} else if (game === 'MHW') {
    // break
} else {
    // normal
}

// 重构
// game库
// game调度员
function gameManager(name) {
    // 统一功能区域
    return `${game}Manager`;
}

const LOLManager = {
    setColor() {
        // 正常
    },
    openDialog() {
        // 折扣
    }
}

const PUBGManager = {
    setColor() {
        // 高亮
    },
    openDialog() {
        // 正常
    }
}

const MHWManager = {
    setColor() {
        // 置灰
    },
    openDialog() {
        // break
    }
}

// no.2
class game {
    constructor(name) {
        this.name = name;
    }
    setColor() {
        // 正常
    }
    openDialog() {
        // 正常
    }
}

class LOL extends game {
    openDialog() {
        // 折扣
    }
}

class PUBG extends game {
    setColor() {
        // 高亮
    }
}

class MHW extends game {
    setColor() {
        // 置灰
    }
    openDialog() {
        // break
    }
}
