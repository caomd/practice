***************中介者模式 执行函数 改变this指向，传参数
 receiveMsg: function () {
                        var type = Array.prototype.shift.call(arguments)
                        this[type].apply(this, arguments)
                    }
            var playFactory = function (name, color) {
            var player = new Player(name, color)
            PlayDirector.receiveMsg('addPlayer', player, color)
            //队员等于工厂的返回值 没有返回值创建失败
            return player
        }
        window.onload = function () {
            //红队 //队员等于工厂的返回值
            var player1 = playFactory('皮蛋', 'red')
            var player2 = playFactory('小鬼', 'red')
            var player3 = playFactory('宝宝', 'red')
***************************