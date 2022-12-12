import axios from "axios";
import LocalStorageService from "../local-storage/local-storage-service";
import {
  TOpenWeatherMapCoordinates,
  TOpenWeatherMapCurrentWeather,
  TOpenWeatherMapLocationMetadata,
} from "./types";

const API_ROOT_URL = "http://api.openweathermap.org";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

console.log(process.env)

const getCoordinatesByZipCode = async (
  zipCode: number,
  countryCode: string = "us"
): Promise<TOpenWeatherMapCoordinates | null> => {
  try {
    const data = (
      await axios.get<TOpenWeatherMapCoordinates>(
        `${API_ROOT_URL}/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${API_KEY}`
      )
    ).data;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getForecast = async (params: number | { lat: number; lon: number }) => {
  const response = {
    forecast: null,
    location: null,
  };
  try {
    const coordinates =
      typeof params !== "object"
        ? await getCoordinatesByZipCode(params)
        : params;
    if (coordinates) {
      const forecast = (
        await axios.get<TOpenWeatherMapCurrentWeather>(
          `${API_ROOT_URL}/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}&units=imperial`
        )
      ).data;
      const location = (
        await axios.get<Array<TOpenWeatherMapLocationMetadata>>(
          `${API_ROOT_URL}/geo/1.0/reverse?lat=${coordinates.lat}&lon=${coordinates.lon}&limit=1&appid=${API_KEY}`
        )
      ).data[0];

      LocalStorageService.saveLocationData(location)

      return { forecast, location };
    }
    return response;
  } catch (error) {
    console.error(error);
    return response;
  }
};

const WeatherService = {
  getCoordinatesByZipCode,
  getForecast,
};

export default WeatherService;
