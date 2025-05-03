let ws;
let token = new URLSearchParams(window.location.search).get("token");

if (token) {
  connectToDeriv(token);
}

function connectToDeriv(token) {
  ws = new WebSocket("wss://ws.derivws.com/websockets/v3?app_id=72379");

  ws.onopen = () => {
    ws.send(JSON.stringify({ authorize: token }));
  };

  ws.onmessage = (msg) => {
    const data = JSON.parse(msg.data);

    if (data.msg_type === "authorize") {
      document.getElementById("account-info").textContent = `Welcome, ${data.authorize.loginid}`;
      document.getElementById("trade-panel").style.display = "block";
      if (data.authorize.is_virtual) {
        document.getElementById("admin-panel").style.display = "block";
      }
    } else if (data.msg_type === "buy") {
      log(`Trade confirmed: ${data.buy.transaction_id}`);
    } else if (data.error) {
      log(`Error: ${data.error.message}`);
    }
  };
}

function log(message) {
  const logDiv = document.getElementById("log");
  const entry = document.createElement("div");
  entry.textContent = message;
  logDiv.appendChild(entry);
}
