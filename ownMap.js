var words = ["ground", "control", "to", "major", "tom"];

function changeArrayWithMap(array,cb) {
  var newArray = [];
  for(var i = 0; i < array.length; i++) {
    newArray.push(cb(array[i]));
  } return newArray;
}
function getStringLength(a) {
  return a.length;
}

function changeWordToUpper(a){
  return a.toUpperCase();
}

function deleteAllVowels(a) {
  return a.replace(/[aeiou]/g, "");
}

console.log(changeArrayWithMap(words, getStringLength))
console.log(changeArrayWithMap(words, changeWordToUpper))
console.log(changeArrayWithMap(words, deleteAllVowels))
