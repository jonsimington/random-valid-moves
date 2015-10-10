// Generated by Creer at 03:39AM on October 10, 2015 UTC, git hash: '98604e3773d1933864742cb78acbf6ea0b4ecd7b'
// This is a simple class to represent the FireDepartment object in the game. You can extend it by adding utility functions here in this file.

var Class = require(__basedir + "/joueur/class");
var client = require(__basedir + "/joueur/client");
var Building = require("./building");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * FireDepartment - Can put out fires completely.
 * @class
 */
var FireDepartment = Class(Building, {
    /// initializes a FireDepartment with basic logic as provided by the Creer code generator
    init: function() {
        Building.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },


    /**
     * Bribes this FireDepartment to extinguish the fire in a building.
     *
     * @param {Building} building - The Building you want to extinguish.
     * @returns {boolean} true if the bribe worked, false otherwise
     */
    extinguish: function(building) {
        return client.runOnServer(this, "extinguish", {
            building: building,
        });
    },


    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = FireDepartment;
