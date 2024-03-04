import { create } from "zustand";

const useWeatherStore = create((set) => ({
  ClimaData: null,
  DadosSlider: null,
  DadosWeekTemp: null,
  AirQualityData: null,
  AqiNivel: null,
  setWeatherData: (key, data) => set((state) => ({ ...state, [key]: data })),
}));

export default useWeatherStore;
