import { create } from "zustand";

export const useWeatherStore = create((set) => ({
  ClimaData: null,
  DadosSlider: null,
  DadosWeekTemp: null,
  AirQualityData: null,
  AqiNivel: null,
  setDados: (newLocation) => set({ climaData: newLocation }),
}));
