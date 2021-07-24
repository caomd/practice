//变位词组
// 对字符串数组进行排序，将所有变位词组合在一起。变位词是指字母相同，但排列不同的字符串。
// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
const groupAnagrams = function (vars) {
    const map = new Map();
    for (let str of vars) {
        let char = Array.from(str).sort().join();
        const list = map.get(char) ? map.get(char) : new Array();
        list.push(str);
        map.set(char, list);
    }
    return Array.from(map.values())
}

const ret = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
console.log(ret)