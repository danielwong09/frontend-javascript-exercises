module.exports.copy = function(objectToCopy){

  var duplicate = new Object();

  for (key in objectToCopy){

    duplicate[key] = objectToCopy[key];

  }

  return duplicate;

};

module.exports.extend = function(dest, src){

  for (srcKey in src){
    dest[srcKey] = src[srcKey]

  }

  return dest;

};

module.exports.hasElems = undefined;