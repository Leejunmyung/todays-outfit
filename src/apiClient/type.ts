export interface WeatherParams {
  lat: number;
  lon: number;
}

export interface WeatherData {
  app_temp: number;
  aqi: number;
  city_name: string;
  clouds: number;
  country_code: string;
  datetime: string;
  dwept: number;
  dhi: number;
  dni: number;
  elev_angle: number;
  ghi: number;
  gust: number | undefined;
  h_angle: number;
  lat: number;
  lon: number;
  ob_time: string;
  pod: string;
  precip: number;
  pres: number;
  rh: number;
  slp: number;
  snow: number;
  solar_rad: number;
  sources: [string];
  state_code: string;
  station: string;
  sunrise: string;
  sunset: string;
  temp: number;
  timezone: string;
  ts: number;
  uv: number;
  vis: number;
  weather: {
    code: number;
    description: string;
    icon: string;
  };
  wind_cdir: string;
  wind_cdir_full: string;
  wind_dir: number;
  wind_spd: number;
}
