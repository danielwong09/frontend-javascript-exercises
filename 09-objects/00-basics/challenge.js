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

/*Complete the formLetter function. This function should:

take one argument, a letter, which has three properties recipient, sender, and msg
combine the three properties into a single string with an additional greeting and closing
insert additional new lines between the greeting, message, and signature.

*/

module.exports.formLetter = function(letter){

  return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;

};

module.exports.canIGet = undefined;