module.exports.getKeys = function(objectWKeys){

  keys = [];

  for (property in objectWKeys) {
    keys.push(property);
  }

  return keys;

};

module.exports.getValues = function(objectWProperties){

  values = [];

  for (property in objectWProperties) {
    values.push(objectWProperties[property]);
  }

  return values;

};

module.exports.objectToArray = undefined;