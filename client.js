const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });
  
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SJC");


    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 100);

    // setInterval(() => {
    //   conn.write("Move: right");
    // }, 100);

    // setInterval(() => {
    //   conn.write("Move: down");
    // }, 100);
    
    // setInterval(() => {
    //   conn.write("Move: left");
    // }, 100);


    setTimeout(() => {
      conn.write("Move: up");
    }, 0);

    setTimeout(() => {
      conn.write("Move: up");
    }, 0);

    setTimeout(() => {
      conn.write("Move: up");
    }, 50);

    setTimeout(() => {
      conn.write("Move: up");
    }, 100);

    setTimeout(() => {
      conn.write("Move: up");
    }, 150);

    setTimeout(() => {
      conn.write("Move: up");
    }, 200);

    setTimeout(() => {
      conn.write("Move: up");
    }, 250);

    setTimeout(() => {
      conn.write("Move: up");
    }, 300);

    setTimeout(() => {
      conn.write("Move: up");
    }, 350);

    setTimeout(() => {
      conn.write("Move: up");
    }, 400);

    setTimeout(() => {
      conn.write("Move: up");
    }, 450);

    setTimeout(() => {
      conn.write("Move: up");
    }, 500);


  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  connect,
};