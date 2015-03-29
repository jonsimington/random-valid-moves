// Generated by Creer, git hash 1003b60e7d8167f4f73211921de0a0516d97a782
// This is a simple class to represent the Checker object in the game. You can extend it by adding utility functions here in this file.

var Class = require("../utilities/class");
var GameObject = require("./gameObject");

/// @class Checker: A checker on the game board.
var Checker = Class(GameObject, {
	/// initializes a Checker with basic logic as provided by the Creer code generator
	// @param <object> data: initialization data
	init: function(data) {
		GameObject.init.call(this, data);

		this.owner = (data.owner === undefined ? null : data.owner);
		this.y = parseInt(data.y === undefined ? 0 : data.y);
		this.x = parseInt(data.x === undefined ? 0 : data.x);
		this.kinged = (data.kinged === undefined ? false : data.kinged);
	},


	/// Moves the checker from its current location to the given (x, y).
	// @param <int> x: The x coordinate to move to.
	// @param <int> y: The y coordinate to move to.
	move: function(x, y) {
		return this._client.sendCommand(this, "move", {
			x: x,
			y: y,
		});
	},
});

module.exports = Checker;