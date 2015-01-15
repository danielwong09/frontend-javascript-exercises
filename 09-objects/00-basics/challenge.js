module.exports.createCourse = function(courseTitle, courseDuration, courseStudents){

  var course = {

    title : courseTitle,
    duration : courseDuration,
    students : courseStudents

  };

  return course;

};


module.exports.addProperty = function(object, newProp, newValue){
  
  if (object.hasOwnProperty(newProp)){

    return object;
    
  } else {

    object[newProp] = newValue;

    return object;
  }
  
};

module.exports.formLetter = function(letter){

  return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;

};

/*Complete the canIGet function. This function should:

Take two arguments:
item: represents what the user wants to buy
money: represents how many dollars a user has
return true if a user can afford a given item according to the price chart below, and false otherwise:
'MacBook Air' - $999
MacBook Pro' - $1299
'Mac Pro' - $2499
'Apple Sticker' - $1
Return false if the item is not in the above list of Apple products
Do this with 0 'if' conditions! (Hint: Place the above price table in an object).
For example:

canIGet('MacBook Air', 100) // returns false
canIGet('MacBook Air', 1000) // returns true*/



module.exports.canIGet = function(item,money){


  var priceTable = {
    "MacBook Air": 999,
    "MacBook Pro": 1299,
    "Mac Pro": 2499,
    "Apple Sticker": 1
  }

  return priceTable[item] <= money;

};


/*


  if (item =='MacBook Air') {
    if (999<=money) {
      return true;
    } 
    else{
      return false;
    };
  }

  if (item =='MacBook Pro') {
    if (1299<=money) {
      return true;
    } 
    else{
      return false;
    };
  }

  if (item =='Mac Pro') {
    if (2499<=money) {
      return true;
    } 
    else{
      return false;
    };
  }

  if (item =='Apple Sticker') {
    if (1<=money) {
      return true;
    } 
    else{
      return false;
    };
  }

  return false;


*/