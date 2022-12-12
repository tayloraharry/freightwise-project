import { useEffect, useState } from "react";
import "antd/dist/reset.css";
import WeatherService from "./services/weather/weather-service";
import {
  TOpenWeatherMapCurrentWeather,
  TOpenWeatherMapLocationMetadata,
} from "./services/weather/types";
import CurrentLocationButton from "./components/current-location-button";
import ForecastCard from "./components/forecast-card";
import { Content, ForecastContainer, Layout, ResultStatus } from "./App.styled";
import ZipCodeInput from "./components/zip-code-input";
import RecentLocations from "./components/recent-locations";
import { Footer } from "antd/es/layout/layout";
import { Typography } from "antd";

function App() {
  const [searchZipCode, setSearchZipCode] = useState<
    number | { lat: number; lon: number }
  >(37027);
  const [isLoading, setisLoading] = useState(false);
  const [location, setLocation] =
    useState<TOpenWeatherMapLocationMetadata | null>(null);
  const [currentWeather, setCurrentWeather] =
    useState<TOpenWeatherMapCurrentWeather | null>(null);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setisLoading(true);
      setNoResults(false);
      setCurrentWeather(null);
      setLocation(null);
      WeatherService.getForecast(searchZipCode).then((res) => {
        if (res.forecast && res.location) {
          setLocation(res?.location);
          setCurrentWeather(res?.forecast);
        } else {
          setNoResults(true);
        }
        setisLoading(false);
      });
    }
  }, [searchZipCode]);

  return (
    <Layout>
      <Content>
        <ForecastContainer>
          <ZipCodeInput
            isLoading={isLoading}
            searchZipCode={searchZipCode}
            onZipCodeChange={setSearchZipCode}
          />
          <CurrentLocationButton
            disabled={isLoading}
            onCoordinatesRetrieved={(coordinates) =>
              coordinates ? setSearchZipCode(coordinates) : null
            }
          />
          {isLoading || noResults ? (
            <ResultStatus level={4}>
              {isLoading ? "Searching..." : "No results found."}
            </ResultStatus>
          ) : null}
          <ForecastCard
            isLoading={isLoading}
            location={location}
            currentWeather={currentWeather}
          />
          {isLoading ? null : (
            <RecentLocations onRecentSelected={setSearchZipCode} />
          )}
        </ForecastContainer>
      </Content>
      <Footer
        style={{
          background: "transparent",
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <small>Taylor Harry - December 2022</small>
      </Footer>
    </Layout>
  );
}

export default App;
