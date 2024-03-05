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

export function calculateAQI_PM(concentration) {
  let breakpoints = [0, 12, 35.4, 55.4, 150.4, 250.4, 350.4, 500.4];
  let AQI = [0, 50, 100, 150, 200, 300, 400, 500];
  let i = 0;

  while (i < breakpoints.length - 1 && concentration > breakpoints[i + 1]) {
    i++;
  }

  return Math.round(
    ((AQI[i + 1] - AQI[i]) / (breakpoints[i + 1] - breakpoints[i])) *
      (concentration - breakpoints[i]) +
      AQI[i]
  );
}
