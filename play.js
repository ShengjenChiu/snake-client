// const { connect } = require("./client");
// const { setupInput } = require("./input");

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });
  
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

console.log("Connecting ...");
connect();

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