module.exports.stream = function(conditionalFn, actionFn){

  while (conditionalFn()){
    actionFn();
  }

  return;

};


/*
take two arguments, a conditionalFn and an actionFn.
call actionFn until conditionalFn returns false.
return nothing.
*/

module.exports.sumNumbers = undefined;

