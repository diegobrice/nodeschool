var nums = [1, 2, 3, 4, 5];

// `map` is your exported function

function double(item) {
  return item * 2;
}

// module.exports = function arrayMap(arr, fn) {
//   // SOLUTION GOES HERE
//   let result = [];
//   arr.reduce((acum, num) => result.push(fn(num)), []);
//   return result;
// };

module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce(function (acc, item, index, arr) {
    acc.push(fn.call(thisArg, item, index, arr));
    return acc;
  }, []);
};
// var result = arrayMap(nums, double);
// console.log(result);
