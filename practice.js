// // function findWaldo(arr) {
// //   arr.forEach(function(element) {
// //     return element;
// //   });
// // }



var array1 = ['a', 'b', 'c'];

// array1.forEach(function(element) {
//   console.log(element);
// });

function testing() {
  array1.forEach(function(element) {
    console.log(element)
  })
}

testing();

function findWaldo(arr) {
  array1.forEach(function(element) {
    return element
    })
  }
  

console.log(findWaldo(["Alice", "Bob", "Waldo", "Winston"]));

// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       return found(i, arr);
//     }
//   }
// }
// callback function:
function actionWhenFound(i, array) {
  console.log("Found " + array[i]  + " at index " + i);
}

function findWaldo(arr, cb) {
  arr.forEach(function (a, b, c) {
    if(a === "Waldo") {
      return cb(a,b,c);
    }
  })
}



console.log(findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound));
