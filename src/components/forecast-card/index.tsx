import { Typography, Image } from "antd";
import { FaTemperatureHigh, FaWater, FaWind, FaCloud } from "react-icons/fa";
import {
  TOpenWeatherMapCurrentWeather,
  TOpenWeatherMapLocationMetadata,
} from "../../services/weather/types";
import Temperature from "../temperature";
import ForecastItems from "./ForecastItems";
import { Container, TemperatureIconContainer } from "./styled";
import SunriseSunset from "./SunriseSunset";

const ForecastCard: React.FC<{
  isLoading: boolean;
  currentWeather: TOpenWeatherMapCurrentWeather | null;
  location: TOpenWeatherMapLocationMetadata | null;
}> = ({ isLoading, currentWeather, location }) => {
  if (!currentWeather || !location) {
    return null;
  }

  return (
    <Container>
      <Typography.Title level={3}>
        {currentWeather.name +
          `${currentWeather.name && location.state ? ", " : " "}` +
          location.state}
      </Typography.Title>
      <div style={{ display: "flex" }}>
        <TemperatureIconContainer>
          <Typography.Title id="current-temperature">
            {Math.round(currentWeather.main.temp || 0)}°
          </Typography.Title>
          <Image
            id="current-weather-icon"
            src={"../icons/" + currentWeather.weather[0].icon + ".png"}
            preview={false}
          />
        </TemperatureIconContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <SunriseSunset
            sunrise={currentWeather.sys.sunrise}
            sunset={currentWeather.sys.sunset}
          />
        </div>
      </div>
      <small>
        Currently feels like{" "}
        <Temperature value={currentWeather.main.feels_like} />
      </small>
      <ForecastItems
        items={[
          {
            icon: <FaTemperatureHigh />,
            description: "High/Low",
            value: (
              <>
                <Temperature value={currentWeather.main.temp_min} />/
                <Temperature value={currentWeather.main.temp_max} />
              </>
            ),
          },
          {
            icon: <FaWater />,
            description: "Humidity",
            value: <>{currentWeather.main.humidity}%</>,
          },
          {
            icon: <FaWind />,
            description: "Wind",
            value: <>{Math.round(currentWeather.wind.speed || 0)} mph</>,
          },
          {
            icon: <FaCloud />,
            description: "Cloud coverage",
            value: <>{Math.round(currentWeather.clouds.all || 0)}%</>,
          },
        ]}
      />
    </Container>
  );
};

export default ForecastCard;
