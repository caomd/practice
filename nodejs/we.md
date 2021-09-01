Buffer
背景知识
1.ArrayBuffer
ArrayBuffer 对象⽤来表示通⽤的、固定⻓度的原始⼆进制数据缓冲区。
ArrayBuffer 不能直接操作，⽽是要通过类型数组对象 或 DataView 对象来操作，它们会将缓
冲区中的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容。
你可以把它理解为⼀块内存, 具体存什么需要其他的声明。

2. Unit8Array
Uint8Array 数组类型表示⼀个 8 位⽆符号整型数组，创建时内容被初始化为 0。
创建完后，可以以对象的⽅式或使⽤数组下标索引的⽅式引⽤数组中的元素。


Microtasks 微任务
在 Node 领域，微任务是来⾃以下对象的回调：
1. process.nextTick()
2. then()
在主线结束后以及事件循环的每个阶段之后，⽴即运⾏微任务回调。
resolved 的 promise.then 回调像微处理⼀样执⾏，就像 process.nextTick ⼀样。 虽然，如果
两者都在同⼀个微任务队列中，则将⾸先执⾏ process.nextTick 的回调。
优先级 process.nextTick > promise.then