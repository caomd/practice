//缓存装饰器就是缓存一个promise
const cacheMap = new Map();
export function EnableCache(target: any, name: string, desciptor: PropertyDecorator) {
    //拿到原有值
    const val = desciptor.value;
    desciptor.value = async function (...args: any) {
        //每个缓存都会有一个key
        const cacheKey = name + JSON.stringify(args);
        if (!cacheMap.get(cacheKey)) {
            //没有缓存 执行函数缓存promise
            const cacheValue = Promise.resolve(val.apply(this, args)).catch(_ => {
                //报错了设置key为空
                cacheMap.set(cacheKey, null)
            })
            cacheMap.set(cacheKey, cacheValue)
        }
        return cacheMap.get(cacheKey)
    };
    return desciptor;

}