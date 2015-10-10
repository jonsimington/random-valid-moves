// Generated by Creer at 03:39AM on October 10, 2015 UTC, git hash: '98604e3773d1933864742cb78acbf6ea0b4ecd7b'
// This is a simple class to represent the Building object in the game. You can extend it by adding utility functions here in this file.

var Class = require(__basedir + "/joueur/class");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Building - A basic building. It does nothing besides burn down. Other Buildings inherit from this class.
 * @class
 */
var Building = Class(GameObject, {
    /// initializes a Building with basic logic as provided by the Creer code generator
    init: function() {
        GameObject.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * when true this building has already been bribed this turn and cannot be bribed again this turn.
         *
         * @name Building#bribed
         * @type boolean
         */
        this.bribed = false;

        /**
         * The Building directly to the east of this building, or null if not present.
         *
         * @name Building#buildingEast
         * @type Building
         */
        this.buildingEast = null;

        /**
         * The Building directly to the north of this building, or null if not present.
         *
         * @name Building#buildingNorth
         * @type Building
         */
        this.buildingNorth = null;

        /**
         * The Building directly to the south of this building, or null if not present.
         *
         * @name Building#buildingSouth
         * @type Building
         */
        this.buildingSouth = null;

        /**
         * The Building directly to the west of this building, or null if not present.
         *
         * @name Building#buildingWest
         * @type Building
         */
        this.buildingWest = null;

        /**
         * How much fire is currently burning the building, and thus how much damage it will take at the end of its owner's turn. 0 means no fire.
         *
         * @name Building#fire
         * @type number
         */
        this.fire = 0;

        /**
         * How much health this building currently has. When this reaches 0 the Building has been burned down
         *
         * @name Building#health
         * @type number
         */
        this.health = 0;

        /**
         * true if this is the Headquarters of the owning player, false otherwise. Burning this down wins the game for the other Player.
         *
         * @name Building#isHeadquarters
         * @type boolean
         */
        this.isHeadquarters = false;

        /**
         * The player that owns this building. If it burns down (health reaches 0) that player gets an additional bribe(s).
         *
         * @name Building#owner
         * @type Player
         */
        this.owner = null;

        /**
         * The location of the Building along the x-axis
         *
         * @name Building#x
         * @type number
         */
        this.x = 0;

        /**
         * The location of the Building along the y-axis
         *
         * @name Building#y
         * @type number
         */
        this.y = 0;

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },



    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Building;
