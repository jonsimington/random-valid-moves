// Generated by Creer at 09:33PM on December 09, 2015 UTC, git hash: '1b69e788060071d644dd7b8745dca107577844e1'
// This is a simple class to represent the Piece object in the game. You can extend it by adding utility functions here in this file.

var Class = require(__basedir + "/joueur/class");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * @class
 * @classdesc A chess piece
 * @extends GameObject
 */
var Piece = Class(GameObject, {
    /**
     * initializes a Piece with basic logic as provided by the Creer code generator
     *
     * @memberof Piece
     */
    init: function() {
        GameObject.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * When the piece has been captured (removed from the board) this is true. Otherwise false.
         *
         * @name Piece#captured
         * @type boolean
         */
        this.captured = false;

        /**
         * The file (y) coordinate of the checker represented as a number [1-8].
         *
         * @name Piece#file
         * @type number
         */
        this.file = 0;

        /**
         * If the piece has moved from its starting position.
         *
         * @name Piece#hasMoved
         * @type boolean
         */
        this.hasMoved = false;

        /**
         * The player that controls this chess Piece.
         *
         * @name Piece#owner
         * @type Player
         */
        this.owner = null;

        /**
         * The rank (x) coordinate of the checker represented as a letter [a-h].
         *
         * @name Piece#rank
         * @type string
         */
        this.rank = "";

        /**
         * The type of chess piece this is, either: 'King', 'Queen', 'Knight', 'Rook', 'Bishop', or 'Pawn'.
         *
         * @name Piece#type
         * @type string
         */
        this.type = "";

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },


    /**
     * Moves the piece from its current location to the given rank and file.
     *
     * @memberof Piece
     * @param {string} rank - The rank (x) coordinate to move to. Must be [a-h].
     * @param {number} file - The file (y) coordinate to move to. Must be [1-8].
     * @param {string} [promotionType] - If this is a Pawn moving to the end of the board then this parameter is what to promote it to.
     * @returns {string} The standard algebraic notation (SAN) representation of the move if successful, empty string otherwise. In addition if you fail your move you lose.
     */
    move: function(rank, file, promotionType) {
        if(arguments.length <= 2) {
            promotionType = "";
        }

        return client.runOnServer(this, "move", {
            rank: rank,
            file: file,
            promotionType: promotionType,
        });
    },


    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Piece;