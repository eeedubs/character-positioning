function countLetters(input){
  var string = input;
  var object = { };
  for (var x = 0; x < string.length; x++){
    if (string[x] !== " "){
      if (object[string[x]]){

        object[string[x]].push(x);
      }
      else {
        object[string[x]] = [x];
     }
   }
  }
  return object;
}
console.log(countLetters("lighthouse in the house"));

// l: index 0
// i: 1, 11,
// g: 2
// h: 3, 5, 15, 18
// t: 4, 13
// o: 6, 18
// u: 7, 19
// s: 8, 20
// e: 9, 15, 21
// n: 12
