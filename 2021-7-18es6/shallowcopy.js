function shallowClone(source) {
    const target = {};
    for (let key in source) {
        if (source.hasOwnProperty(target)) {
            target[key] = source[key];
        }
    }
    return target;
}