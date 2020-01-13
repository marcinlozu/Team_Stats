const team = {
	_players: [],
	_games: [],

get players() {
	return this._players;
},

set players(player) {
	this._players.push(player);
},

get games() {
	return this._games;
},

set games(game) {
	this._games.push(game);
},

addPlayer(playerName, playerSurname, playerAge) {
	const player = {
		name: playerName,
		surname: playerSurname,
		age: playerAge,
	}

	this.players = player
},

addGames(opponent, teamPoints, opponentPoints) {
	const game = {
		opponent,
		teamPoints,
		opponentPoints,
	}

	this.games = game;
},

showPlayers() {
	console.log('Players in my team:')
	for (let i=0; i<this._players.length; i++) {
		console.log(`- ${this.players[i].name} ${this.players[i].surname}`)
	}
}

}

team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)
//console.log(team.players);

team.addGames('Titans', 100, 98)
team.addGames('Mad Warlocks', 150, 42)
//console.log(team.games)

team.showPlayers()