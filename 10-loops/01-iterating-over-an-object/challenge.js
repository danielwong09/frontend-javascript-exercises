module.exports.getKeys = function(objectWKeys){

  keys = [];

  for (property in objectWKeys) {
    keys.push(property);
  }

  return keys;

};

module.exports.getValues = undefined;

module.exports.objectToArray = undefined;