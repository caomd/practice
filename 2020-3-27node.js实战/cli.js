const { program } = require('commander')
// const config = {
//     plugins: ['import']
// }
let config = { }
try {
    config = require('./cli-config')
} catch (error) { }
//插件的扩展
const { plugins = [] } = config;
plugins.forEach(plugin => {
    const pluginModule = require(`@module/${plugin}`)
    pluginModule()
})

program.arguments('<div>')
    .action((dir) => {
        console.log(dir)
    })

program.parse(process.argv)