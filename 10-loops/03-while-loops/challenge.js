module.exports.stream = function(conditionalFn, actionFn){

  while (conditionalFn()){
    actionFn();
  }

  return;

};


/*This function should:

take an array of numbers as an argument.
return the sum of the numbers.
this function should use a while loop.
For example:

sumNumbers([]); // should return 0.

sumNumbers([1,2,3,4]); // should return 10.*/

module.exports.sumNumbers = function(numbers){

  var sum = 0;

  var index = 0;

  while (index < numbers.length){
    sum += numbers[index];

    index++;
  }

  return sum;
};

