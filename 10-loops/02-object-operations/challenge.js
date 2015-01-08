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

/*

Complete the hasElems function. This function should:

take two arguments. The first is an object and the second is an array of elements
return true when all of the elements in the array are keys in the object, false otherwise

*/

module.exports.hasElems = function(object, elements){

  var hasAllElements = true;

  for (var index = 0; index < elements.length; index++){

    var hasThisElement = false;

    if (hasAllElements){ 
      for (key in object){

        //Question, do all elements exist as keys in the object?
        //As compared to, do all object keys exist in the array?

        //console.log("Does array element:" + elements[index] + " == " + "object key:" + key + "?")
        if (key == elements[index]){
          hasThisElement = true; //try to exit loop? would need
          //console.log("Yes, the object has " + elements[index]);
        }
        // else  {
        //   console.log("no");
        // }

      }

      //if has this element is true, continue as normal (because hasAllElements is defaulted to true)

      //if has this element is false, then set hasAllelements to false, and try to exit
      if (!hasThisElement) { //would be a great use of "unless" like in Ruby
        hasAllElements = false; //  and sets overall function output
        index = elements.length; // prevents completing checkin any other elements, since one is already a non-match

        //console.log("hasAllElements is " + hasAllElements);
      }
    }
    
  }

  return hasAllElements;

};