const fetch = require("node-fetch");

const apiKey = "53736ef8d523e141f00b0531ca79f7f2";
const lat = "";
const lon = "";
const city = "";
const lang = "pt_br";

const url = `http://api.openweathermap.org/data/2.5/weather/forecast/air_pollution?q=${city}&appid=${apiKey}&units=metric&lang=${lang}`;

const urlStart = `http://api.openweathermap.org/data/2.5/weather/forecast/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=${lang}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Erro ao obter previsão do tempo:", error);
  });
