// Generated by Creer, git hash 1003b60e7d8167f4f73211921de0a0516d97a782
// This is where you build your AI for the Checkers game.
var Class = require("../utilities/class");
var BaseAI = require("../baseAI");

function shuffle(o){ //v1.0
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

/// @class AI: the AI functions for the Checkers game.
var AI = Class(BaseAI, {
	// this is the name you send to the server to play as.
	getName: function() {
		return "Checkers Javascript Player";
	},

	// this is called once the game starts and your AI knows its playerID and game. You can initialize your AI here.
	gameInitialized: function() {
		// pass
	},

	// this is called when the game's state updates, so if you are tracking anything you can update it here.
	gameUpdated: function() {
		this.checkersMap = [];
		for(var x = 0; x < this.game.boardWidth; x++) {
			this.checkersMap[x] = [];
		}

		this.myCheckers = [];
		this.forcedChecker = undefined;
		for(var i = 0; i < this.game.checkers.length; i++) {
			var checker = this.game.checkers[i];

			if(this.game.checkerMoved === checker) { // then we have to use that checker
				this.forcedChecker = checker;
			}
			
			if(checker.owner === this.player) {
				this.myCheckers.push(checker);
			}

			this.checkersMap[checker.x][checker.y] = checker;
		}
	},

	// this is called every time the server tells you that you can send a command. Once you send a command you must return. This is where most of your game logic will probably go
	run: function() {
		var myCheckers = this.myCheckers;
		if(this.forcedChecker) {
			if(this.game.checkerMovedJumped) { // then it is valid to move again
				myCheckers = [ this.forcedChecker ];
			}
			else { // it moved but did not jump, so it can't move again
				return this.player.endTurn();
			}
		}

		shuffle(myCheckers);

		var yDirection = this.playerID === 0 ? 1 : -1;

		for(var i = 0; i < myCheckers.length; i++) {
			var checker = myCheckers[i];

			var neighbors = [
				{x: checker.x + 1, y: checker.y + yDirection},
				{x: checker.x - 1, y: checker.y + yDirection}
			];

			if(checker.kinged) {
				neighbors.push({x: checker.x + 1, y: checker.y - yDirection});
				neighbors.push({x: checker.x - 1, y: checker.y - yDirection})
			}

			shuffle(neighbors);

			while(neighbors.length > 0) {
				var neighbor = neighbors.pop();

				if(neighbor.x >= this.game.boardWidth || neighbor.x < 0 || neighbor.y >= this.game.boardHeight || neighbor.y < 0) {
					continue; // because we can't use this neighor as it is out of bounds
				}

				if(this.forcedChecker) { // then we have to jump
					if(neighbor.jump) {// we can jump!
						return checker.move(neighbor.x, neighbor.y);
					}
				}
				else {
					var jumpingChecker = this.checkersMap[neighbor.x][neighbor.y]
					if(jumpingChecker) { // we have to jump it, so add the next tile over
						if(jumpingChecker.owner !== checker.owner) {
							if(!neighbor.jump) {
								var dx = neighbor.x - checker.x;
								var dy = neighbor.y - checker.y;
								
								neighbors.push({
									jump: true,
									x: neighbor.x + dx,
									y: neighbor.y + dy,
								});
							}
						}
					}
					else { // it's valid!
						return checker.move(neighbor.x, neighbor.y);
					}
				}
			}
		}

		// if we got here there's nothing to do...
		this.player.endTurn();
	},

	// this is called when the server is no longer taking game commands from you, normally when you turn ends and another players begins.
	ignoring: function() {
		// pass
	},

	// this is called when the game closes (ends), you can clean up your data and dump files here if need be
	close: function(){
		// pass
	},
});

module.exports = AI;
