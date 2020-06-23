// function toUpperArray(items) {
//   if (!items.length) return []; // end condition
//   var head = items[0]; // item to operate on
//   head = head.toUpperCase(); // perform action
//   var tail = items.slice(1); // next
//   console.log(tail);
//   return [head].concat(toUpperArray(tail)); // recursive step
// }

// const result = toUpperArray(["hello", "world", "diego", "brice"]); // => ['HELLO', 'WORLD']
// console.log(result);

// function reduce(arr, fn, initial) {
//   return (function reduceOne(index, value) {
//     if (index > arr.length - 1) return value; // end condition
//     return reduceOne(index + 1, fn(value, arr[index], index, arr)); // calculate & pass values to next step
//   })(0, initial); // IIFE. kick off recursion with initial values
// }

// module.exports = reduce;

function reduce(arr, fn, initial) {
  // SOLUTION GOES HERE
  if (!arr.length) return initial;
  initial = fn(initial, arr[0]);
  var tail = arr.slice(1);
  return reduce(tail, fn, initial);
}

const result = reduce(
  [1, 2, 3],
  function (prev, curr, index, arr) {
    return prev + curr;
  },
  0
);

module.exports = reduce;
