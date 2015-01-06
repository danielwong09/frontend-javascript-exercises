/*
Complete the splitAndLowerCaseString function. This function should:

split the inputString argument into an array of strings by commas
return an array with the set of split strings in lowercase format
For example:

splitAndLowerCaseString("TEST") // returns ["test"]
splitAndLowerCaseString("THIS,IS,SPLIT,BY,COMMAS") // returns ["this", "is", "split", "by", "commas"]
splitAndLowerCaseString("THIS HAS NO COMMAS") // returns ["this has no commas"]
Hint: You should use the built-in string functions split and toLowerCase.


Complete the addIndex function. This function should:

create and return a new array of all inputs as strings
each of the new strings should start with "[index] is [data element at index]"
For example:

addIndex([1, 2, 3]) // returns ["0 is 1", "1 is 2", "2 is 3"]
addIndex(['My', 1, 'number']) // returns ["0 is My", "1 is 1", "2 is number"]
*/
module.exports.sumNumbers = function(numbers){

  var sum = 0;

  for (var index = 0; index < numbers.length; index++){
    sum += numbers[index];
  }

  return sum;
};

module.exports.splitAndLowerCaseString = function(inputString){


  var strings = [];

  strings = inputString.split(",");

  for(var index=0; index < strings.length; index++){
    strings[index] = strings[index].toLowerCase();

  }
  
  return strings;

};

module.exports.addIndex = undefined;
