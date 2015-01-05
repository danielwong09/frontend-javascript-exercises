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

module.exports.formLetter = undefined;

module.exports.canIGet = undefined;