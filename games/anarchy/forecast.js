// Generated by Creer at 03:39AM on October 10, 2015 UTC, git hash: '98604e3773d1933864742cb78acbf6ea0b4ecd7b'
// This is a simple class to represent the Forecast object in the game. You can extend it by adding utility functions here in this file.

var Class = require(__basedir + "/joueur/class");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Forecast - The weather effect that will be applied at the end of a turn, which causes fires to spread.
 * @class
 */
var Forecast = Class(GameObject, {
    /// initializes a Forecast with basic logic as provided by the Creer code generator
    init: function() {
        GameObject.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * The Player that can use WeatherStations to control this Forecast when its the nextForecast.
         *
         * @name Forecast#controllingPlayer
         * @type Player
         */
        this.controllingPlayer = null;

        /**
         * The direction the wind will blow fires in. Can be 'north', 'east', 'south', or 'west'
         *
         * @name Forecast#direction
         * @type string
         */
        this.direction = "";

        /**
         * How much of a Building's fire that can be blown in the direction of this Forecast. Fire is duplicated (copied), not moved (transfered).
         *
         * @name Forecast#intensity
         * @type number
         */
        this.intensity = 0;

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },



    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Forecast;
