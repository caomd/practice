设计模式描述了一个在我们周围不断发生的问题，以及解决该问题方案的核心。 有了设计模式，我们就可以一次又一次的使用该方案而不用重复劳动。 
设计模式主要通过两个方面来解决复杂问题：
1. 分解：将复杂问题分解成多个简单问题；
2. 抽象：忽略问题的本质细节，去处理泛化和理想化了的对象模型。

常见的设计模式有：单例模式、原型模式、工厂模式、观察者模式、策略模式、代理模式等

单例模式的定义是：保证一个类仅有一个实例，并提供一个访问它的全局访问点.
单例模式两个条件
确保只有一个实例
可以全局访问
适用：适用于弹框的实现, 全局缓存

const singleton = function(name) {
  this.name = name;
  this.instance = null;
}

singleton.prototype.getName = function() {
  console.log(this.name);
};

singleton.getInstance = function(name) {
  if (!this.instance) { // 关键语句
    this.instance = new singleton(name);
  }
  return this.instance;
};

// test
const a = singleton.getInstance('a'); // 通过 getInstance 来获取实例
const b = singleton.getInstance('b');
console.log(a === b);

使用单例模式，符合单一职责原则。并且事实上在很多的场景中都在用，比如：vuex和redux中的store。