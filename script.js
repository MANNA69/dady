const app_id = 72379;
const redirect_uri = encodeURIComponent("https://manna69.github.io/babymoney/");

document.getElementById("login-btn").addEventListener("click", () => {
  window.location.href = `https://oauth.deriv.com/oauth2/authorize?app_id=${app_id}&redirect_uri=${redirect_uri}`;
});

const accountInfo = document.getElementById("account-info");
const tradePanel = document.getElementById("trade-panel");
const adminPanel = document.getElementById("admin-panel");

// Simulated token check (Replace with real token logic)
function checkLogin() {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  if (token) {
    accountInfo.innerText = "Logged in with token: " + token.slice(0, 6) + "...";
    tradePanel.style.display = "block";

    // Optionally enable admin panel based on some condition
    if (token.startsWith("a")) {
      adminPanel.style.display = "block";
    }
  }
}

// Placeholder functions
function placeTrade() {
  const symbol = document.getElementById("symbol").value;
  const contract = document.getElementById("contract").value;
  const duration = document.getElementById("duration").value;
  const stake = document.getElementById("stake").value;

  const log = document.getElementById("log");
  log.innerText = `Placing trade: ${symbol}, ${contract}, ${duration}min, $${stake}`;
}

function saveTokens() {
  alert("Tokens saved!");
}

function clearTokens() {
  document.getElementById("client-tokens").value = "";
  alert("Tokens cleared.");
}

function copyTrade() {
  alert("Copy trade sent to clients.");
}

// Run check on page load
checkLogin();
