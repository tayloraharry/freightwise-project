export type TOpenWeatherMapCoordinates = {
  zip: string;
  name: string;
  country: string;
} & TCoordinates;

export interface TOpenWeatherMapCurrentWeather {
    coord: TCoordinates
    weather: TWeather[]
    base: string
    main: TMain
    visibility: number
    wind: TWind
    rain: TRain
    clouds: TClouds
    dt: number
    sys: TSys
    timezone: number
    id: number
    name: string
    cod: number
  }
  
  export interface TCoordinates {
    lon: number
    lat: number
  }
  
  export interface TWeather {
    id: number
    main: string
    description: string
    icon: string
  }
  
  export interface TMain {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  
  export interface TWind {
    speed: number
    deg: number
    gust: number
  }
  
  export interface TRain {
    "1h": number
  }
  
  export interface TClouds {
    all: number
  }
  
  export interface TSys {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  

export type TOpenWeatherMapLocationMetadata = {
  name: string;
  local_names: {
    en: string;
  };
  lat: number;
  lon: number;
  country: string;
  state: string;
};
