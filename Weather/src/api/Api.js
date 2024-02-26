import { useEffect } from "react";
import { Alert } from "react-native";
import { calculateAQI } from "../api/modules";
import useLocationStore from "../scripts/useLocationStore";
const fetch = require("node-fetch");

const apiKey = "53736ef8d523e141f00b0531ca79f7f2"; // Chave Para Testes
const lang = "pt_br";
var city = "";

let ClimaData = {};
let DadosSlider = {};
let DadosWeekTemp = {};
let AirQualityData = {};
let AqiNivel = "";

// Acesso de Dados

export const CurrentLoc = () => {
  let lat = "";
  let lon = "";
  let loc = useLocationStore((state) => state.location);
  if (loc != null) {
    lat = loc.coords.latitude;
    lon = loc.coords.longitude;
  }

  VerificarLoc(lat, lon);
  //StartLocationData(lat, lon);
  AirPollution(lat, lon);
  return { ClimaData, DadosSlider, DadosWeekTemp, AirQualityData, AqiNivel };
};

// Pesquisa da Privisão do tempo
export const SearchCity = (searchText) => {
  city = searchText;
  ClimaAtual(city);
  return { ClimaData, DadosSlider, DadosWeekTemp, AirQualityData, AqiNivel };
};

export const ClimaAtual = async function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=${lang}`;
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
    //console.log(data);
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

    ForecastWeek(coord.lat, coord.lon);

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

export const StartLocationData = async function (lat, lon) {
  //
  //let currentLatitude = lat;
  //let currentLongitude = lon;

  let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=${lang}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    //
    console.log("-------------------------------------------------------");
    //console.log(data);
    console.log("-------------------------------------------------------");

    //
    let sunriseTimestamp = new Date(data.sys.sunrise * 1000);
    let sunsetTimestamp = new Date(data.sys.sunset * 1000);
    let visibilidadeBruta = data.visibility;

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

    ForecastWeek(lat, lon);

    return ClimaData;
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

export const ForecastWeek = async function (currentLatitude, currentLongitude) {
  let lat = currentLatitude;
  let lon = currentLongitude;

  let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=${lang}`;

  console.log("URL: ", url);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("-------------------------------------------------------");
    //console.log(data);
    console.log("-------------------------------------------------------");

    DadosSlider =
      data.list && data.list.length >= 16
        ? data.list.slice(0, 16).map((item) => ({
            hora: item.dt_txt.split(" ")[1], // Obter a hora
            temp: item.main.temp,
            chanceChuva: item.pop * 100, // Chance de chuva em 3 horas (%)
          }))
        : [];

    DadosWeekTemp = {};
    if (data.list && Array.isArray(data.list)) {
      data.list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0]; // Obter a data
        if (
          !DadosWeekTemp[date] ||
          item.main.temp_max > DadosWeekTemp[date].temp_max
        ) {
          DadosWeekTemp[date] = {
            temp_max: item.main.temp_max,
            temp_min: item.main.temp_min,
          };
        }
      });
    }

    //AirPollution(currentLatitude, currentLongitude);

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

export const AirPollution = async function (currentLatitude, currentLongitude) {
  let url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${currentLatitude}&lon=${currentLongitude}&appid=${apiKey}&units=metric&lang=${lang}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    AirQualityData = {
      aqi: data.list[0].main.aqi,
      co: data.list[0].components.co,
      no: data.list[0].components.no,
      no2: data.list[0].components.no2,
      o3: data.list[0].components.o3,
      so2: data.list[0].components.so2,
      pm2_5: data.list[0].components.pm2_5,
      pm10: data.list[0].components.pm10,
      nh3: data.list[0].components.nh3,
    };

    const aqi = calculateAQI(
      AirQualityData.co,
      AirQualityData.nh3,
      AirQualityData.no,
      AirQualityData.no2,
      AirQualityData.o3,
      AirQualityData.pm10,
      AirQualityData.pm2_5,
      AirQualityData.so2
    );
    console.log("AQIN: ", aqi);
    console.log("Data: ", AirQualityData);

    return { AqiNivel, AirQualityData };
  } catch (error) {
    console.error(error);
    return { AqiNivel: -1, AirQualityData: {} };
  }
};

const VerificarLoc = function (lat, lon) {
  if (lat == null || lon == null) {
    lat = "-23.533773";
    lon = "-46.625290";
  }

  return { lat, lon };
};
