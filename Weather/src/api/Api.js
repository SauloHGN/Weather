import { Alert } from "react-native";
import { calculateAQI, calculateAQI_PM } from "../api/modules";
import useWeatherStore from "../scripts/useWeatherStore";
const fetch = require("node-fetch");

const apiKey = "53736ef8d523e141f00b0531ca79f7f2"; // Chave Para Testes (sujeito a falhas)
const lang = "pt_br";
var city = "";
var lat = "";
var lon = "";
//

export const CurrentLoc = async function (loc) {
  console.log("loc", loc);
  if (loc != null) {
    lat = loc.coords.latitude;
    lon = loc.coords.longitude;
  } else {
    lat = "-23.5475";
    lon = "-46.6361";
  }
  console.log(lat, lon);
  //VerificarLoc(lat, lon);
  //StartLocationData(lat, lon)
  //return{ClimaData, DadosSlider}
  const [ClimaData, Foorecast, AirQuality] = await Promise.all([
    StartLocationData(lat, lon),
    ForecastWeek(lat, lon),
    AirPollution(lat, lon),
  ]);
  return { ClimaData, Foorecast, AirQuality };
};

// Pesquisa da Privisão do tempo
export const SearchCity = async (searchText) => {
  city = searchText;

  const ClimaData = ClimaAtual(city);

  const [Foorecast, AirQuality] = await Promise.all([
    ClimaAtual(city),
    ForecastWeek(ClimaData.lat, ClimaData.lon),
    AirPollution(ClimaData.lat, ClimaData.lon),
  ]);
  return { ClimaData, Foorecast, AirQuality };
};

export const ClimaAtual = async function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=${lang}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    let visibilidadeBruta = data?.visibility;

    const ClimaData = {
      lat: data?.coord?.lat,
      lon: data?.coord?.lon,
      temperatura: Math.round(data?.main?.temp),
      clima: data?.weather[0].main,
      maxTemp: Math.round(data?.main?.temp_max),
      minTemp: Math.round(data?.main?.temp_min),
      sensacao: Math.round(data?.main?.feels_like),
      pressao: data?.main?.pressure,
      umidade: data?.main?.humidity,
      velVento: Math.round(data?.wind?.speed),
      visibilidade:
        visibilidadeBruta < 1000
          ? `${visibilidadeBruta} m`
          : `${visibilidadeBruta / 1000} km/h`,
      sunrise: new Date(data?.sys?.sunrise * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sunset: new Date(data?.sys?.sunset * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      cidade: data?.name,
      paisCode: data?.sys?.country,
    };

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
  let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=${lang}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(url);

    let visibilidadeBruta = data?.visibility;

    const ClimaData = {
      lat: data?.coord?.lat,
      lon: data?.coord?.lon,
      temperatura: Math.round(data?.main?.temp),
      clima: data?.weather[0].main,
      maxTemp: Math.round(data?.main?.temp_max),
      minTemp: Math.round(data?.main?.temp_min),
      sensacao: Math.round(data?.main?.feels_like),
      pressao: data?.main?.pressure,
      umidade: data?.main?.humidity,
      velVento: Math.round(data?.wind?.speed),
      visibilidade:
        visibilidadeBruta < 1000
          ? `${visibilidadeBruta} m`
          : `${visibilidadeBruta / 1000} km/h`,
      sunrise: new Date(data?.sys?.sunrise * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sunset: new Date(data?.sys?.sunset * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      cidade: data?.name,
      paisCode: data?.sys?.country,
    };

    //let ClimaData = getClimaData(data);
    //useWeatherStore.getState().setWeatherData("ClimaData", ClimaData);

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

  try {
    const response = await fetch(url);
    const data = await response.json();

    let DadosSlider =
      data.list && data.list.length >= 16
        ? data.list.slice(0, 16).map((item) => ({
            hora: item.dt_txt.split(" ")[1], // Obter a hora
            temp: item.main.temp,
            chanceChuva: item.pop * 100, // Chance de chuva em 3 horas (%)
          }))
        : [];

    let DadosWeekTemp = {}; // necessita Revisão de logica
    if (data.list && Array.isArray(data.list)) {
      data.list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0]; // Obter a data
        const dateFormat = formatarData(date);
        if (
          !DadosWeekTemp[dateFormat] ||
          item.main.temp_max > DadosWeekTemp[dateFormat].temp_max
        ) {
          DadosWeekTemp[dateFormat] = {
            date: dateFormat,
            temp_max: item.main.temp_max,
            temp_min: item.main.temp_min,
          };
        }
      });
    }

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

const formatarData = (data) => {
  const partes = data.split("-");
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
};

export const AirPollution = async function (currentLatitude, currentLongitude) {
  let url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${currentLatitude}&lon=${currentLongitude}&appid=${apiKey}&units=metric&lang=${lang}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    let AirQualityData = {
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

    let AqiNivel = calculateAQI_PM(AirQualityData.pm2_5);
    /*let AqiNivel = calculateAQI(
      AirQualityData.co,
      AirQualityData.nh3,
      AirQualityData.no,
      AirQualityData.no2,
      AirQualityData.o3,
      AirQualityData.pm10,
      AirQualityData.pm2_5,
      AirQualityData.so2
    );*/
    console.log("nivel do AQI: ", AqiNivel);

    return { AqiNivel, AirQualityData };
  } catch (error) {
    console.error(error);
    return { AqiNivel: -1, AirQualityData: {} };
  }
};
