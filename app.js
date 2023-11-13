const printHello = (text) => {
  console.log(text);
};

let timerID = setInterval(() => {
  printHello("salam");
}, 1000);
clearTimeout(timerID);
console.log(timerID);

// const customSetInterval = (func, interval, ...params) => {
//   setTimeout(() => {
//     func(...params);
//     customSetInterval(func, interval, ...params);
//   }, interval);
// };
// customSetInterval(printHello, 1000, 'salam')
