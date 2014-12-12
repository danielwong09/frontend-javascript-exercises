module.exports.addItem = function(newItem,list){

/* This function should take two arguments:
Don't add an item to the list if it already exists in the list*/



//check if item is in the list

var j = 0;

  while (j < list.length){

    if ( newItem != list[j]){
      j++;
    }else{
      console.log("returning unaltered list");
      return list;
    };
  };

  console.log("should be pushing");
  list.push(newItem);
  return list;

};



module.exports.reverseSortedList = function(originalArray){

  originalArray.sort();
  originalArray.reverse();

  return originalArray;

};

