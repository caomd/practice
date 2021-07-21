//返回所有Promise的状态和结果
function promiseAllSettled(promiseArr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promiseArr)) {
            return reject(new TypeError('arguments must be an array'));
        }
        let counter = 0;
        let promiseArrNum = promiseArr.length;
        const resolvedArr = [];
        for (let i = 0; i < promiseArrNum; i++) {
            Promise.resolve(promiseArr[i])
                .then(value => {
                    resolvedArr[i] = {
                        status: 'fulfilled',
                        value
                    }
                }).catch((reason) => {
                    resolvedArr[i] = {
                        status: 'rejected',
                        reason
                    }
                }).finally{
                counter++;
                if (counter === promiseArrNum) {
                    resolve(resolvedArr);
                }
            }
        }
    })
}