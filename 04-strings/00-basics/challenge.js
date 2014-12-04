module.exports.formLetter = function(firstName, senderName, message) {

 return "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" +senderName;

};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {

  return bigString.substring(startA, endA) + bigString.substring(startB, endB);
};

module.exports.findFirstMatch = function(text, searchString) {


  return text.indexOf(searchString);

};

module.exports.findLastMatch = function(text, searchString) {

  return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {


  var startIndex= text.indexOf(searchString);

  startIndex= startIndex + searchString.length;

  var endIndex= text.lastIndexOf(searchString);


  return text.substring(startIndex, endIndex);

};