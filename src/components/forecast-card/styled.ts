import { Card, Descriptions } from "antd";
import styled from "styled-components";

const Container = styled(Card)`
  max-width: 90vw;
  width: 400px;
  padding-top: 12px;
`;

const TemperatureIconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .current-temperature {
    margin: 0px;
    font-weight: bold;
  }
`;

const ForecastItemLabel = styled.div`
  display: flex !important;
  align-items: center !important;

  svg {
    margin-right: 6px !important;
    font-size: 18px;
  }
`;

export { Container, TemperatureIconContainer, ForecastItemLabel };
