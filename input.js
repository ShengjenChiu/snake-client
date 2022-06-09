// Stores the active TCP connection object.
let connection;

//should check for the ctrl + c input and terminate the game.
const handleUserInput = function (key) {
  // on any input from stdin (standard input), output a "." to stdout
  //process.stdout.write('.');

  if(key === 'w') {
    connection.write("Move: up");
  }

  if(key === 'a') {
    connection.write("Move: left");
  }

  if(key === 's') {
    connection.write("Move: down");
  }

  if(key === 'd') {
    connection.write("Move: right");
  }

  if(key === 'p') {
    connection.write("Say: hello world");
  }

  if(key === 'l') {
    connection.write("Say: it's very nice!");
  }

  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
}

//setup interface to handle user input from stdin
const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  // Event Handling for User Input
  stdin.on("data", handleUserInput);

  connection = conn;

  return stdin;
};

// setupInput();

module.exports = {
  setupInput,
};