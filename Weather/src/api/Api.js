import { useEffect } from "react";
import { Alert } from "react-native";
const fetch = require("node-fetch");

const apiKey = "53736ef8d523e141f00b0531ca79f7f2"; // Chave Para Testes
const lang = "pt_br";
var city = "";
var lat = "";
var lon = "";

let ClimaData = {};
let DadosSlider = {};
let DadosWeekTemp = {};

// Acesso de Dados
export const getClimaAtual = () => {
  return ClimaData;
};

export const getDadosSlider = () => {
  return DadosSlider;
};

export const getDadosWeekTemp = () => {
  return DadosWeekTemp;
};

export const getStartLocation = () => {
  return currentClimaData;
};

// Pesquisa da Privisão do tempo
export const SearchCity = (searchText) => {
  city = searchText;
  ClimaAtual(city);
};

export const ClimaAtual = async function (city) {
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=${lang}`;
  console.log("URL: ", url);
  try {
    const response = await fetch(url);
    const data = await response.json();
    //
    var coord = {
      lat: data.coord.lat,
      lon: data.coord.lon,
    };
    let sunriseTimestamp = new Date(data.sys.sunrise * 1000);
    let sunsetTimestamp = new Date(data.sys.sunset * 1000);
    let visibilidadeBruta = data.visibility;

    console.log("COORDEnADA", coord);
    //
    console.log("-------------------------------------------------------");
    console.log(data);
    console.log("-------------------------------------------------------");

    ClimaData = {
      temp: Math.round(data.main.temp),
      clima: data.weather.main,
      maxTemp: Math.round(data.main.temp_max),
      minTemp: Math.round(data.main.temp_min),
      sensacao: Math.round(data.main.feels_like),
      pressao: data.main.pressure,
      umidade: data.main.humidity,
      velVento: Math.round(data.wind.speed),
      visibilidade:
        visibilidadeBruta < 1000
          ? `${visibilidadeBruta} m`
          : `${visibilidadeBruta / 1000} km/h`,
      sunrise: sunriseTimestamp.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sunset: sunsetTimestamp.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      cidade: data.name,
      paisCode: data.sys.country,
    };

    //ForecastWeek(lat, lon);

    return ClimaData;
  } catch (error) {
    console.error("Falha ao se conectar a API", error);
    return Alert.alert(
      "Tente novamente",
      "Não foi possivel obter a previsão do tempo.",
      [{ text: "Ok" }]
    );
  }
};

export const ForecastWeek = async function (lat, lon) {
  let url = `http://api.openweathermap.org/data/2.5/weather/forecast/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=${lang}`;

  console.log("URL: ", url);

  try {
    const response = await fetch(url);
    const data = await response.json();

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
  } catch (error) {
    console.error("Falha ao se conectar a API", error);
    return Alert.alert(
      "Tente novamente",
      "Não foi possivel obter a previsão do tempo.",
      [{ text: "Ok" }]
    );
  }
};

export const StartLocationData = async function (localizacaoAtual) {
  //
  //useLocalizacao();
  const currentLatitude = localizacaoAtual.coords.latitude;
  const currentLongitude = localizacaoAtual.coords.longitude;
  if (currentLatitude || currentLongitude == null) {
    currentLatitude = "-23.533773";
    currentLongitude = "-46.62529";
  }

  let url = `http://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=${apiKey}&units=metric&lang=${lang}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    //
    var coord = {
      lat: data.coord.lat,
      lon: data.coord.lon,
    };
    let sunriseTimestamp = new Date(data.sys.sunrise * 1000);
    let sunsetTimestamp = new Date(data.sys.sunset * 1000);
    let visibilidadeBruta = data.visibility;

    console.log("COORDEnADA", coord);
    //
    console.log("-------------------------------------------------------");
    console.log(data);
    console.log("-------------------------------------------------------");

    currentClimaData = {
      temp: Math.round(data.main.temp),
      clima: data.weather.main,
      maxTemp: Math.round(data.main.temp_max),
      minTemp: Math.round(data.main.temp_min),
      sensacao: Math.round(data.main.feels_like),
      pressao: data.main.pressure,
      umidade: data.main.humidity,
      velVento: Math.round(data.wind.speed),
      visibilidade:
        visibilidadeBruta < 1000
          ? `${visibilidadeBruta} m`
          : `${visibilidadeBruta / 1000} km/h`,
      sunrise: sunriseTimestamp.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sunset: sunsetTimestamp.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      cidade: data.name,
      paisCode: data.sys.country,
    };

    // useEffect(() => {
    //   getDados(currentClimaData);
    // }, []);
    //ForecastWeek(currentLatitude, currentLongitude);

    return currentClimaData;
  } catch (error) {
    console.error("Falha ao se conectar a API", error);
    return Alert.alert(
      "Tente novamente",
      "Não foi possivel obter a previsão do tempo.",
      [{ text: "Ok" }]
    );
  }

  //
};
