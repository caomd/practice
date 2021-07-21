function promiseAll(promiseArr) {
    return new Promise((resolve, reject) => {
        //判断类型
        if (!Array.isArray(promiseArr)) {
            return reject(new TypeError('arguments must be an array'));
        }
        let counter = 0;
        let promiseNum = promiseArr.length;
        let resolvedArr = [];
        for (let i = 0; i < promiseNum; i++) {
            Promise.resolve(promiseArr[i]).then(value => {
                counter++;
                resolvedArr[i] = value;
                if (counter === promiseNum) {
                    resolve(resolvedArr)
                }
            }).catch((e) => {
                reject(e)
            })
        }
    })
}

