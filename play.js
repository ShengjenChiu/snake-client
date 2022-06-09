const { connect } = require("./client");
// const { setupInput } = require("./input");



//setupInput();


// // setup interface to handle user input from stdin

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
  
//   // Event Handling for User Input
//   stdin.on("data", handleUserInput);
  
//   return stdin;
// };


// //should check for the ctrl + c input and terminate the game.
// const handleUserInput = function (key) {
//   // on any input from stdin (standard input), output a "." to stdout
//   process.stdout.write('.');
  
//   // \u0003 maps to ctrl+c input
//   if (key === '\u0003') {
//     process.exit();
//   }

// }