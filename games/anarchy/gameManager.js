// DO NOT MODIFY THIS FILE
// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class AnarchyGameManager extends GameManager {}

AnarchyGameManager.prototype._gameObjectClasses = {
  Building: require('./building'),
  FireDepartment: require('./fireDepartment'),
  Forecast: require('./forecast'),
  GameObject: require('./gameObject'),
  Player: require('./player'),
  PoliceDepartment: require('./policeDepartment'),
  Warehouse: require('./warehouse'),
  WeatherStation: require('./weatherStation'),
};

module.exports = AnarchyGameManager;
