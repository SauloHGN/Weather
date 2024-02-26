////

export function calculateAQI(co, nh3, no, no2, o3, pm10, pm2_5, so2) {
  const pollutants = [co, nh3, no, no2, o3, pm10, pm2_5, so2];
  const breakpoints = [0, 12, 35.4, 55.4, 150.4, 250.4, 350.4, 500.4];
  const AQIh = [50, 100, 150, 200, 300, 400, 500];
  const AQIl = [0, 51, 101, 151, 201, 301, 401];

  let aqi = -1;
  for (let i = 0; i < pollutants.length; i++) {
    let c = pollutants[i];
    if (c !== undefined) {
      let j = 0;
      while (c > breakpoints[j + 1]) {
        j++;
      }
      aqi =
        ((AQIh[j] - AQIl[j]) / (breakpoints[j + 1] - breakpoints[j])) *
          (c - breakpoints[j]) +
        AQIl[j];
      break;
    }
  }

  return Math.round(aqi);
}
