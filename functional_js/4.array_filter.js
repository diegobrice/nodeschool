function getShortMessages(messages) {
  // let filtro = messages.filter((objeto) => objeto.message.length < 50);
  // let res = filtro.map((objeto) => objeto.message);
  // return res;
  return messages
    .filter((item) => item.message.length < 50)
    .map((item) => item.message);
}

// module.exports = function getShortMessages(messages) {
//   return messages
//     .filter(function (item) {
//       return item.message.length < 50;
//     })
//     .map(function (item) {
//       return item.message;
//     });
// };

module.exports = getShortMessages;
