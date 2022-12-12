import { TOpenWeatherMapLocationMetadata } from "../weather/types";

const saveLocationData = (location: TOpenWeatherMapLocationMetadata) => {
  if (navigator.cookieEnabled) {
    let updatedLocationData: Array<TOpenWeatherMapLocationMetadata> = [];
    const rawLocationData = localStorage.getItem("recent-locations");
    if (rawLocationData) {
      const locationData = JSON.parse(
        rawLocationData
      ) as Array<TOpenWeatherMapLocationMetadata>;
      if (
        locationData.filter(
          (l) => l.name === location.name && l.state === location.state
        ).length === 0
      ) {
        locationData.push(location);
      }
      updatedLocationData = locationData;
    } else {
      updatedLocationData.push(location);
    }

    localStorage.setItem(
      "recent-locations",
      JSON.stringify(updatedLocationData.splice(0, 5))
    );
  }
};

const getLocationData = () => {
  if (navigator.cookieEnabled) {
    const rawLocationData = localStorage.getItem("recent-locations");
    if (rawLocationData) {
      return JSON.parse(
        rawLocationData
      ) as Array<TOpenWeatherMapLocationMetadata>;
    } else return [];
  }

  return [];
};

const removeLocationData = (city: string, state: string) => {
  if (navigator.cookieEnabled) {
    const rawLocationData = localStorage.getItem("recent-locations");
    if (rawLocationData) {
      const locationData = (
        JSON.parse(rawLocationData) as Array<TOpenWeatherMapLocationMetadata>
      ).filter((l) => l.name !== city && l.state !== state);

      localStorage.setItem("recent-locations", JSON.stringify(locationData));
    }
  }
};

const clearLocationData = () => {
  if (navigator.cookieEnabled) {
    localStorage.removeItem("recent-locations");
  }
};

const LocalStorageService = {
  saveLocationData,
  getLocationData,
  removeLocationData,
  clearLocationData,
};

export default LocalStorageService;
