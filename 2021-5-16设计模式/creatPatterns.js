//创建元素
//工厂模式 生产同类型产品
//隐藏创建过程，暴露共同接口
//需求：游戏商店里下载，运行游戏，并且可以触发运行游戏
class Shop {
    create(name) {
        return new Game(name);
    }
}
class Game {
    constructor(name) {
        this.name = name;
    }
    init() { }
    run() { }
}

let shop = new Shop()
let game1 = shop.create('game1');
game1.init();
game1.run();
let game2 = shop.create('game2');
game2.init();
game2.run();

//建造者模式 独立建造模块
//拆分简单模块 独立执行 注重过程和搭配
//需求：优惠套餐单元 商品 + 皮肤 搭配打折售卖

class Shop2 {
    constructor() {
        this.package = '';
    };
    //生成套餐
    create(name) {
        this.package = new PackageBuilder(name);
    }
    //获取套餐
    get() {
        return this.package.getPackage();
    }
}
class Product {
    constructor(name) {
        this.name = name;
    }
    //生成商品
    init() {
        console.log(this.name + '初始化完成')
    }
}
class Skin {
    constructor(name) {
        this.name = name;
    }
    //生成皮肤
    init() {
        console.log(this.name + '初始化完成')
    }
}
class PackageBuilder {
    constructor(name) {
        this.game = new Product(name);
        this.skin = new Skin(name);
    }
    getPackage() {
        return this.game.init() + this.skin.init();
    }
}

const shop2 = new Shop2();
shop2.create('LOL');
shop2.get();
console.log(shop2);

//单例模式 
//全局只有一个实例
//场景 PlayStation play shutdown 任何操作都不能重复执行
class PlayStation {
    constructor() {
        this.state = 'off';
    }
    play() {
        if (this.state === 'on') {
            console.log('已在游戏中');
            return;
        }
        this.state = 'on';
        console.log('开始游戏')
    }
    shutdown() {
        if (this.state === 'off') {
            console.log('已关机');
            return;
        }
        this.state = 'off';
        console.log('已经关机请放心')
    }
    // 不建议也不对，因为看不到可能会直接创建实例对象，拿到外面
    // static getInstance = function () {
    //     //判断当前有无实例
    //     console.log(this)
    //     let instance;
    //     console.log('888',instance)
    //     return function () {
    //         console.log(this)
    //         if (!instance) {
    //             console.log('00')
    //             instance = new PlayStation();
    //             console.log('ppp', instance)
    //         }
    //         return instance;
    //     }()//自动执行
    // }
}
PlayStation.getInstance = (function () {
    let instance;
    //为保证创建一次使用闭包，把instance作为私有变量
    console.log(instance, '999')
    return function () {
        if (!instance) {
            console.log('00')
            instance = new PlayStation();
        }
        return instance;
    }
})()
const ps = PlayStation.getInstance()
console.log(ps)
ps.play()
ps.play()
ps.shutdown()
const ps1 = PlayStation.getInstance()
console.log(ps1)
console.log('是一个实例', ps === ps1)
ps1.play()


//单例模式
const singleton = function (name) {
    this.name = name;
    this.instance = null;
}

singleton.prototype.getName = function () {
    console.log(this.name);
};

singleton.getInstance = function (name) {
    // console.log(this)
    if (!this.instance) { // 关键语句
        // console.log('99')//只执行了一次
        this.instance = new singleton(name);
    }
    return this.instance;
};

// test
const a = singleton.getInstance('a'); // 通过 getInstance 来获取实例
const b = singleton.getInstance('b');
// console.log(a === b);

//总结
//1.工厂模式批量生产同类型应用，满足同种产品使用需求
//2.建造者模式：需要多个独立解耦的模块，通过一定的组织（套餐）实现复杂核心
//3.全局只要一个实例

