/*
 * @Author: caomd 
 * @Date: 2021-12-22 18:41:19 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-22 18:46:52
 */
var closeQQ = function () {
    console.log('close QQ')
}
var closeComputer = function () {
    console.log('close CloseComputer')
}
var MacroCommand = (
    function () {
        var cacheCommand = []
        return {
            add: function (command) {
                cacheCommand.push(command)
            },
            execute: function () {
                for (var i = 0; i < cacheCommand.length; i++) {
                    var command = cacheCommand[i]
                    command.apply(this, arguments)
                }
            }
        }
    }
)()

MacroCommand.add(closeQQ)
MacroCommand.add(closeComputer)
MacroCommand.execute()
