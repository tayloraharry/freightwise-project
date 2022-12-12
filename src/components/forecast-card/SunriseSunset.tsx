import { BsSunrise, BsSunsetFill } from "react-icons/bs";
import styled from "styled-components";
import { epochToLocalDateTime } from "../../utils/epoch-to-local";

type Props = {
  sunrise: number;
  sunset: number;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .sunrise,
  .sunset {
    margin-bottom: 6px;
    display: flex;
  }

  .sunrise > svg,
  .sunset > svg {
    font-size: 20px;
    margin-right: 6px;
  }
`;

const SunriseSunset: React.FC<Props> = ({ sunrise, sunset }) => (
  <Container id="sunrise-sunset-container">
    <div className="sunrise">
      <BsSunrise />
      {epochToLocalDateTime(sunrise).getHours() +
        ":" +
        epochToLocalDateTime(sunrise).getMinutes() +
        "am"}
    </div>
    <div className="sunset">
      <BsSunsetFill />
      {epochToLocalDateTime(sunset).getHours() -
        12 +
        ":" +
        epochToLocalDateTime(sunset).getMinutes() +
        "pm"}
    </div>
  </Container>
);

export default SunriseSunset;
