const fetch = require("node-fetch");

const apiKey = "53736ef8d523e141f00b0531ca79f7f2"; // Chave Para Testes
const lang = "pt_br";
var city = "";
var lat = "";
var lon = "";

//const urlStart = `http://api.openweathermap.org/data/2.5/weather/forecast/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=${lang}`;

// Pesquisa da Privisão do tempo
export const SearchCity = (searchText) => {
  city = searchText;
  ClimaAtual(city);
  //ForecastWeek(lat, lon);
};

export const ClimaAtual = function (city) {
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=${lang}`;
  console.log("URL: ", url);
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //
      var coord = {
        lat: data.coord.lat,
        lon: data.coord.lon,
      };

      let sunriseTimestamp = new Date(data.sys.sunrise * 1000);
      let sunsetTimestamp = new Date(data.sys.sunset * 1000);

      console.log("COORDEnADA", coord);
      //
      console.log("-------------------------------------------------------");
      console.log(data);
      console.log("-------------------------------------------------------");

      const ClimaData = {
        temp: data.main.temp,
        clima: data.weather.main,
        maxTemp: data.main.temp_max,
        minTemp: data.main.temp_min,
        sensacao: data.main.feels_like,
        pressao: data.main.pressure,
        humidade: data.main.humidity,
        velVento: data.wind.speed,
        sunrise: sunriseTimestamp.toLocaleTimeString(),
        sunset: sunsetTimestamp.toLocaleTimeString(),
        cidade: data.name,
        paisCode: data.sys.country,
      };

      return ClimaData;
    })
    .catch((error) => {
      console.error("Falha ao se conectar a API", error);
      return Error(
        "Não foi possivel obter a previsão do tempo...\n tente novamente mais tarde."
      );
    });
};

export const ForecastWeek = function (lat, lon) {
  let url = `http://api.openweathermap.org/data/2.5/weather/forecast/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=${lang}`;

  console.log("URL: ", url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("-------------------------------------------------------");
      console.log(data);
      console.log("-------------------------------------------------------");

      const DadosSlider = data.list.slice(0, 16).map((item) => ({
        hora: item.dt_txt.split(" ")[1], // Obter a hora
        temp: item.main.temp,
        chanceChuva: item.pop * 100, // Chance de chuva em 3 horas (%)
      }));

      const DadosWeekTemp = data.list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0]; // Obter a data
        if (
          !weekTempData[date] ||
          item.main.temp_max > weekTempData[date].temp_max
        ) {
          weekTempData[date] = {
            temp_max: item.main.temp_max,
            temp_min: item.main.temp_min,
          };
        }
      });

      return { DadosSlider, DadosWeekTemp };
    })
    .catch((error) => {
      console.error("Falha ao se conectar a API", error);
      return Error(
        "Não foi possivel obter a previsão do tempo...\n tente novamente mais tarde."
      );
    });
};
