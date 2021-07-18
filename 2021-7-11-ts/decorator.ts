/**
 * @param target
 * @param name
 * @param descriptor
 */
//装饰器计算运行时间
export function measure(target: any, name: any, descriptor: any) {
    //不修改原函数luoji
    const oldValue = descriptor.value;
    //修改现有逻辑
    descriptor.value = async function () {
        const startTime = Date.now()
        const ret = await oldValue.apply(this, arguments)
        console.log(`${name}耗时${Date.now() - startTime}ms`)
        return ret
    }
    return descriptor;

}