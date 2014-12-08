module.exports.newArray = function(item1,item2,item3,item4){
  return [item1,item2,item3,item4];
};

module.exports.firstAndLast = function(initialArray){

  return [initialArray[0], initialArray[initialArray.length-1]];

};