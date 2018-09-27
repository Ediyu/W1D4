var input = [{
    x: 3,
    y: 4
  },
  {
    x: 12,
    y: 5
  },
  {
    x: 8,
    y: 15
  }
];
var result = input.map(function (item, i) {
  var xValue = input[i].x;
  var yValue = input[i].y;
  var zValue = xValue * xValue + yValue * yValue;

  return Math.sqrt(zValue);
});​

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);