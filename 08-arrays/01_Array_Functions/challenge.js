module.exports.reversePlusOne = function(initialArray){

/*Take one argument, an array of at least two numbers.
This function should return:
the array reversed with a 1 added at the front*/

  var reversedArray = [];
  while (reversedArray.length != initialArray.length){

    reversedArray.unshift(initialArray[reversedArray.length]);

  }

  reversedArray.unshift(1);

  // Debugging

  /*console.log('reversedArraycontent');

  for (var i = reversedArray.length - 1; i >= 0; i--) {
    console.log(reversedArray[i]);
  };

  console.log('EndReversedArraycontent');
*/
  return reversedArray;

};





module.exports.plusesEverywhere = function(initialArray){

/*Take one argument, an array of at least two numbers.
This function should return:
a String made of all the values in the array separated by +
*/


  var combinedValues = initialArray[0];

  for (var i = 1; i <= initialArray.length - 1; i++) {
    combinedValues+= "+" + initialArray[i];
  };

  return combinedValues;

};

module.exports.arrayQuantityPlusOne = function(initialArray){
/*
Take one argument, an array of numbers.
This function should return:
one greater than the number of items in the array*/

return initialArray.length +1;



};