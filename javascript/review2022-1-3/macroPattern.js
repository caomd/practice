/*
 * @Author: caomd
 * @Date: 2022-01-03 12:20:38
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-03 12:31:27
 */

//macroOrder one order to control many operation
var MacroCommand = (
    function () {
        var cacheCommand = []
        return {
            add: function (command) {
                cacheCommand.push(command)
            },
            execute: function () {
                for (var i = 0; i < cacheCommand.length; i++) {
                    var fn = cacheCommand[i]
                    fn.apply(this, arguments)
                }
            }
        }
    }
)()
var closeComuter = {
    close: function () {
        console.log('close computer')
    },
    open: function () {
        console.log('open computer')
    }
}
var closeQQ = {
    close: function () {
        console.log('close QQ')
    }
}
var closeLight = {
    close: function () {
        console.log('close light')
    }
}
MacroCommand.add(closeComuter.close)
MacroCommand.add(closeQQ.close)
MacroCommand.add(closeLight.close)
MacroCommand.execute()