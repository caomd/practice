
/**
 * 
 */
/** */
//中介者模式
var playerDirector = (
    function () {
        var teamPlayersData = {}
        return {
            addPlayer: function (newPlayer) {
                var teamColor = newPlayer.teamColor
                teamPlayersData[teamColor] = teamPlayersData[teamColor] || []
                teamPlayersData[teamColor].push(newPlayer)
            },
            remove: function (player) {
                var teamColor = player.teamColor
                var teamPlayers = teamPlayersData[teamColor] || []
                for (var i = teamPlayers.length - 1; i >= 0; i--) {
                    if (player === teamPlayers[i]) {
                        teamPlayers.splice(i, 1)
                    }
                }
            },
            changeTeam: function (player, newTeamColor) {
                //从原队移除
                this.remove(player)
                //改变队伍颜色
                player.teamColor = newTeamColor
                //新队伍加一人
                teamPlayersData[newTeamColor].push(player)
            },
            die: function (player) {
                var teamColor = player.teamColor
                var teamPlayers = teamPlayersData[teamColor]
                //判断all die
                var all_dead = true
                for (var i = 0, player; player = teamPlayers[i++];) {
                    if (player.state !== 'dead') {
                        all_dead = false
                        break
                    }
                }
                //本队输 对方队赢
                if (all_dead) {
                    for (var color in teamPlayersData) {
                        if (teamColor !== color) {
                            var teamPlayersEnmy = teamPlayersData[color]
                            for (var i = 0, player; player = teamPlayersEnmy[i++];) {
                                player.win()
                            }
                        }
                    }
                    //本队输了
                    for (var i = 0, player; player = teamPlayers[i++];) {
                        player.lose()
                    }
                }
            },
            receiveMessage: function () {
                var message = Array.prototype.shift.call(arguments)
                this[message].apply(this, arguments)
            }
        }
    }
)()
//游戏对象
function Player(name, teamColor) {
    this.name = name
    this.teamColor = teamColor
    this.state = 'alive'
}
Player.prototype.win = function () {
    console.log(this.name + 'won')
}
Player.prototype.lose = function () {
    console.log(this.name + 'lose')
}
Player.prototype.die = function () {
    this.state = 'dead'
    console.log(this.name + 'dead')
    playerDirector.receiveMessage('die', this)
}
Player.prototype.changeTeam = function (teamColor) {
    console.log(this.name + '换队')
    playerDirector.receiveMessage('changeTeam', this, teamColor)
}
Player.prototype.remove = function () {
    console.log(this.name + '移除' + this.teamColor + '队')
    playerDirector.receiveMessage('remove', this)
}
var playFactory = function (name, teamColor) {
    var newPlayer = new Player(name, teamColor)
    playerDirector.receiveMessage('addPlayer', newPlayer)
    return newPlayer //不返回没法调用方法
}
//红队
var player1 = playFactory('皮蛋', 'red')
var player2 = playFactory('小鬼', 'red')
var player3 = playFactory('宝宝', 'red')
var player4 = playFactory('小强', 'red')
//蓝队
var player5 = playFactory('黑妞', 'blue')
var player6 = playFactory('葱头', 'blue')
var player7 = playFactory('胖墩', 'blue')
var player8 = playFactory('海盗', 'blue')

// player1.die()
// player2.die()
// player3.die()
// player4.die()

// player1.remove()
// player2.remove()
// player3.die()
// player4.die()

player1.changeTeam('blue')
player2.die()
player3.die()
player4.die()