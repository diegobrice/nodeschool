function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce((words, word) => {
    words[word] = ++words[word] || 1;
    // if (word in words) {
    //   words[word]++;
    // } else {
    //   words[word] = 1;
    // }
    return words;
  }, {});
}

module.exports = countWords;

var inputWords = ["Apple", "Banana", "Apple", "Durian", "Durian", "Durian"];

console.log(countWords(inputWords));

// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }
