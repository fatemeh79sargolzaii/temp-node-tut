// const amount = 12;

// if (amount < 10) {
//   console.log("small number");
// } else {
//   console.log("large number");
// }

// console.log("hey it's my first node app!!!");

// console.log(__dirname);
// setInterval(() => {
//   console.log("Hello word");
// }, 1000);
// const names = require("./3-names");
// const sayHi = require("./4-utils");
// const deta = require("./6-alternative-flavor");
// require("./7-mind-grenade");
// console.log(deta);
// sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
