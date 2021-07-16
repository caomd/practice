// DIP - 上层不应该依赖下层的实现
// 目标：面向抽象进行coding，而不是面向实现进行coding。降低需求和实现的耦合。

// 需求
// sprint1
// 分享功能
class Store {
    constructor() {
        this.share = new Share();
    }
}

class Share {
    shareTo(platform) {
        // 分享到不同的平台
    }
}

const store = new Store();
store.share.shareTo('wx');

// sprint2
class Store {
    constructor() {
        this.share = new Share();
        this.rate = new Rate();
    }
}

class Share {
    shareTo(platform) {
        // 分享到不同的平台
    }
}

class Rate {
    star(stars) {
        // 打分
    }
}

const store = new Store();
store.rate.star('5');


// 重构 - 暴露挂载
class Rate {
    init(store) {
        store.rate = this;
    }
    star(stars) {
        // 打分
    }
}

class Share {
    init(store) {
        store.share = this;
    }
    shareTo(platform) {
        // 分享到不同的平台
    }
}

class Store {
    static modules = new Map();
    constructor() {
        for (let module of Store.modules.values()) {
            module.init(this);
        }
    }
    // 注入功能
    static inject(module) {
        Store.modules.set(module.constructor.name, module);
    }
}

const rate = new Rate();
Store.inject(rate);

const store = new Store();
store.rate.star(4);
