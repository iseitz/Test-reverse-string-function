// var reverseString = function(word) {
//   var result = '';
//   for (var i = 0; i < word.length; i++) {
//     result = word[i] + result;
//   }
//   return result;
// };

let reverseString = (word) => {
  let result = '';
  for (i = 0; i < word.length; i++) {
    result = word[i] + result;
  }
  return result;
};
