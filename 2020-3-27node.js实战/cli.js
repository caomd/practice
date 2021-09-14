const { program } = require('commander')
const fs = require('fs')
// const config = {
//     plugins: ['import']
// }
console.log(process.argv)
//输出：
// [
//     '/usr/local/bin/node',
//     '/Users/caomengdie/Documents/dachang/practise/practice/2020-3-27node.js实战/cli.js'
//   ]
let config = { }
try {
    config = require('./cli-config')
} catch (error) { }
//插件的扩展
// const { plugins = [] } = config;
// plugins.forEach(plugin => {
//     const pluginModule = require(`@module-plugin-/${plugin}`)
//     pluginModule()
// })

program
    .arguments('<dir>')
    .action((dir) => {
        const content = fs.readFileSync(__dirname, './index.boilerplate')
        console.log(dir)
        fs.writeFileSync(path.resolve(process.cwd(),dir),content)
    })

program.parse(process.argv)