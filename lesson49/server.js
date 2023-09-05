const WebSocket = require("ws");

let ws = new WebSocket.Server({ port: 5500 });

ws.on("connection", (w) => {
  console.log("New client connected!");

  w.on("close", (e) => {
    console.log("New client disconnected!");
  });

  w.onmessage = (e) => {
    ws.clients.forEach((client) => {
      client.send(e.data);
    });
  };
});

// const express = require("express");
// const cors = require("cors");

// let app = express();

// app.use(cors());

// app.use("/users", (req, res) => {
//   res.send([
//     {
//       id: 1,
//       name: "jasurbek",
//       age: 19,
//     },
//   ]);
// });

// app.listen(8080, () => {
//   console.log("server running on 8080");
// });
