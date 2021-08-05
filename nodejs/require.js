const path = require('path')
const fs = require('fs')
const vm = require('vm')//把字符串变成可执行的代码

// const filePath = path.resolve(__dirname, 'index.js')
// const content = fs.readFileSync(filePath, 'utf-8')
// // console.log(content, 'content')
// //注意这里是exports不然报错
// const wrapper = ['(function(require,module,exports){', '})']
// const wrapperContent = wrapper[0] + content + wrapper[1]
// const script = new vm.Script(wrapperContent, {
//     filename: 'index.js'
// })
// const result = script.runInThisContext()
// result()//是一个函数了就要执行 打印Hello Node vm Script

//实现require
function r(filename) {
    const filePath = path.resolve(__dirname, filename)
    const content = fs.readFileSync(filePath, 'utf-8')
    // console.log(content, 'content')
    //注意这里是exports不然报错
    const wrapper = ['(function(require,module,exports){', '})']
    const wrapperContent = wrapper[0] + content + wrapper[1]
    const script = new vm.Script(wrapperContent, {
        filename: 'index.js'
    })
    const module = {
        exports: {}
    }
    const result = script.runInThisContext()
    result(r, module, module.exports)//就是function(require,module,exports
    return module.exports
}
global.r = r;