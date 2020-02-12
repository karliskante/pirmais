
// 1.

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('text'));

// 2.
var patiesiba = false;
var a = 1;
var b = 4;
a = parseInt(a);
b = parseInt(b);
c = a +b;
if (a == 5 ) {
    patiesiba = true;
  } 
  else if (b == 5) {
      patiesiba = true;
  }
else if (c == 5) {
 patiesiba = true;
}
else {
    patiesiba = false;
}
console.log(patiesiba);

// 3.

var array = [5, 3, 2, 7, 8];
var sum;
function masivs(array) {
    for (
      var
        index = 0,              // The iterator
        length = array.length,  // Cache the array length
        sum = 0;                // The total amount
        index < length;         // The "for"-loop condition
        sum += array[index++]   // Add number on each iteration
    );
    return sum;
  }

  console.log("SUMMA IR: "+masivs(array));

 
// 4.

var array = [5, 3, 2, 5];
var sum;
  var pat2 = !array.some(isNaN);
function masivs2(array) {
    if(array.length = 3 && array.length > 0 && pat2 == true){
    for (
      var
        index = 0,              // The iterator
        length = array.length,  // Cache the array length
        sum = 0;                // The total amount
        index < length;         // The "for"-loop condition
        sum += array[index++]   // Add number on each iteration
    );
    return sum;
  }
  else {
      if(array.length != 3) {
      console.log("arraya nav tiesi 3 elementi");
      }
      else if (array.length = 0) {
      console.log("arraya nav elementu")
      }
      else if (pat == false) {
     console.log("arraya nav skaitlu")  
    }
  }
}
console.log(masivs2(array));



 