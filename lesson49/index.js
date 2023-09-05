//! 49 - dars | Websocket | Backend ExpressJS | YouTube Link
// 	—  new Websocket
// 	—  open / message /error / close
// 	—  ws:// and wss://
// 	—  SearchParams
// 	—  Websocket Protocol
// 	—  Data Transfer
// 	—  Chatting application
// 	—  Backend with expressJS

let socket = new WebSocket("ws://127.0.0.1:5500/lesson49/");

socket.onopen = () => {
  console.log("connected!");
};

socket.onmessage = (event) => {
  let div = document.createElement("div");
  div.innerHTML = event?.data;
  console.log(event);
  msg.append(div);
};

send.onclick = () => {
  socket.send(value.value);
  value.value = "";
};

socket.onerror = () => {
  console.log(error);
};

socket.onclose = () => {
  console.log("close");
};

// fetch("http://localhost:8080/users")
//   .then((res) => res.json())
//   .then((res) => console.log(res));
