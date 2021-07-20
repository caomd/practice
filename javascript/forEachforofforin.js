// forEach无法中途跳出forEach循环，break,return都不奏效

// for...in循环可以遍历数组的键名。但是键为数字的字符串表示"0"
// 不同于forEach方法，它可以与break、continue和return配合使用。
// for...in循环有几个缺点。
// 数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
// for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
// 某些情况下，for...in循环会以任意顺序遍历键名。
// 总之，for...in循环主要是为遍历对象而设计的，不适用于遍历数组。

// 有着同for...in一样的简洁语法，但是没有for...in那些缺点。
// 不同于forEach方法，它可以与break、continue和return配合使用。
// 提供了遍历所有数据结构的统一操作接口。

const a = { 'n': '1', 'm': '2' };
for (let k in a) {
    if (k === 'n') {
        continue;
    }
    console.log('hello')
}