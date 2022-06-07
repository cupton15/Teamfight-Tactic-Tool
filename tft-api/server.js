const http = require("http");
const axios = require("axios").default;
require("dotenv").config();

const hostname = "127.0.0.1";
const port = 3001;

const RiotHttpClient = axios.create({
  headers: {
    "X-Riot-Token": process.env.RIOT_API_KEY,
  },
});

const server = http.createServer((req, res) => {
  RiotHttpClient.get("https://euw1.api.riotgames.com/tft/league/v1/challenger")
    .then((response) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(response.data));
    })
    .catch((err) => console.error(err));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
