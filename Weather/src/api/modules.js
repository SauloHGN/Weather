//

export function calculateAQI(co, nh3, no, no2, o3, pm10, pm2_5, so2) {
  const pollutants = [co, nh3, no, no2, o3, pm10, pm2_5, so2];
  const breakpoints = [0, 50, 100, 200, 300, 400, 500];
  const AQIh = [50, 100, 200, 300, 400, 500];
  const AQIl = [0, 51, 101, 201, 301, 401];

  let aqis = [];
  for (let i = 0; i < pollutants.length; i++) {
    let c = pollutants[i];
    if (c !== undefined) {
      let j = 0;
      while (c > breakpoints[j + 1]) {
        j++;
      }
      let aqi =
        ((AQIh[j] - AQIl[j]) / (breakpoints[j + 1] - breakpoints[j])) *
          (c - breakpoints[j]) +
        AQIl[j];
      aqis.push(aqi);
    }
  }

  return Math.round(Math.max(...aqis));
}
