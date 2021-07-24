//节流
function throttle(fn, delay) {
    let timer;
    let startTime = new Date().getTime();
    return (arguments) => {
        if (new Date().getTime() - startTime >= delay) {
            fn.apply(this, arguments);
            startTime = current;
        } else {
            timer = setTimeout(() => {
                fn.apply(this, arguments);
                clearTimeout(timer);
            }, delay)
        }
    }
}
function click() {
    console.log('hello');
}

function throttle2(fn, delay) {
    let timer;
    let startTime = new Date().getTime();
    return (arguments) => {
        const currentTime = new Date().getTime();
        if (startTime - currentTime >= delay) {
            fn.apply(this, arguments);
            startTime = currentTime;
        } else {
            timer = setTimeout(() => {
                fn.apply(this, arguments);
                clearTimeout(timer)
            }, delay)
        }
    }
}


