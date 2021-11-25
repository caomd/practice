//中介者模式 解决多对多为一对多
//游戏者
var Player = function (name, teamColor) {
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
    PlayerDirector.receiveMessage('die', this)
}
Player.prototype.changeTeam = function (newTeamColor) {
    console.log(this.name + '换到' + newTeamColor + '队')
    PlayerDirector.receiveMessage('changeTeam', newTeamColor, this)
}
Player.prototype.remove = function () {
    console.log(this.name + '移除' + this.teamColor + '队')
    PlayerDirector.receiveMessage('remove', this)
}
//playFactory 实例化对象
var playFactory = function (name, teamColor) {
    var newPlayer = new Player(name, teamColor)
    PlayerDirector.receiveMessage('addPlayer', newPlayer)
    return newPlayer
}
//中介者
var PlayerDirector = (
    function () {
        var teamPlayersData = {}
        return {
            receiveMessage: function () {
                var message = Array.prototype.shift.call(arguments)
                this[message].apply(this, arguments)
            },
            addPlayer: function (newPlayer) {
                var teamColor = newPlayer.teamColor
                teamPlayersData[teamColor] = teamPlayersData[teamColor] || []
                teamPlayersData[teamColor].push(newPlayer)
            },
            remove: function (player) {
                var teamColor = player.teamColor
                var teamPlayers = teamPlayersData[teamColor] || []
                for (var i = 0; i < teamPlayers.length; i++) {
                    if (teamPlayers[i] === player) {
                        teamPlayers.splice(i, 1)
                    }
                }
            },
            changeTeam: function (newTeamColor, player) {
                var teamColor = player.teamColor
                //从原队移除
                this.remove(player)
                //加入新队伍
                player.teamColor = newTeamColor
                teamPlayersData[newTeamColor].push(player)
            },
            die: function (player) {
                var teamColor = player.teamColor
                var teamPlayers = teamPlayersData[teamColor] || []
                //判断当前队队员状态
                var lostFlag = true
                for (var i = 0, player; player = teamPlayers[i++];) {
                    if (player.state !== 'dead') {
                        lostFlag = false
                    }
                }
                //全部阵亡，本队输,对方队胜
                if (lostFlag) {
                    for (var i = 0, player; player = teamPlayers[i++];) {
                        player.lose()
                    }
                    console.log(teamColor + '队输了本局比赛')
                    //对方胜
                    var teamColorEnmy
                    for (var color in teamPlayersData) {
                        if (color !== teamColor) {
                            teamColorEnmy = color
                            var teamPlayersEnmy = teamPlayersData[color]
                            for (var i = 0, player; player = teamPlayersEnmy[i++];) {
                                player.win()
                            }
                        }
                    }
                    console.log(teamColorEnmy + '队赢了本局比赛')
                }
            }
        }
    }
)()

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