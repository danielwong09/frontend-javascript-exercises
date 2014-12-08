module.exports.equalStrings = function(stringOne, stringTwo) {
  return stringOne == stringTwo;
};

module.exports.notEqual = function(one, two) {

  return !(one === two);

};

module.exports.inBetween = function(lower, middle, upper) {

  return (lower < middle) && (middle < upper);

};

module.exports.outsideRanges = function(number) {

/*
return true when the number is:
not between 10 and 20, it also can't be 10 or 20
not between 42 and 75, it also can't be 75. 42 is allowed
not between 1 and 6. 1 and 6 are allowed
*/

return (number <= 1) || ((6 <= number) && (number <10)) || ((20< number) && (number <= 42)) || (75<number);

};

module.exports.nameAndPrice = function(name, price) {

/*
take two arguments: 'name' which is the name of a newspaper, and 'price' which is a number
return true if name is 'NYTimes' or 'LATimes', and price is greater than or equal to 1
*/

return ((name == 'NYTimes') || (name == 'LATimes')) && 1 <= price;


};