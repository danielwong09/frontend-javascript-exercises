module.exports.favoriteNumber = function(favoriteNumber, guess){

  if (favoriteNumber < guess) {
    return "Too high";
  };

  if (guess < favoriteNumber ) {
    return "Too low";
  };

  if (guess == favoriteNumber ) {
    return "You got it!";
  };


};


/*have four arguments that are all numbers
return "correct" if the four numbers are a valid combination
return "incorrect" if the 4 numbers aren't a valid combination
a combination is valid if:
the first number is a 3, 5, or 7
the second number is 2
the third number is between 5 and 100. 5 and 100 are both valid numbers
the fourth number is less than 9 or greater than 20. 9 and 20 both invalid numbers
*/



module.exports.checkLock = function(num1, num2, num3, num4){

  if (((num1 == 3) || (num1 == 5) || (num1 == 7)) && (num2 == 2) && ((5<=num3) && (num3 <= 100)) && ((num4< 9) || (20 <num4))) {
    return "correct";
  }
  else{
    return "incorrect";
  };

};


/*
take two arguments:
'item' should represent what the user wants to buy
'money' should represent how many dollars a user has
return 'true' if a user can afford a given item according to the price chart below, false otherwise:
'MacBook Air' - $999
'MacBook Pro' - $1299
'Mac Pro' - $2499
'Apple Sticker' - $1
return 'false' if the 'item' is not in the above list apple products
*/

module.exports.canIGet = function(item, money){


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




};