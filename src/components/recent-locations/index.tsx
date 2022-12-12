import { CloseOutlined } from "@ant-design/icons";
import { Card, Space, Tooltip } from "antd";
import { useState } from "react";
import styled from "styled-components";
import LocalStorageService from "../../services/local-storage/local-storage-service";
import { TCoordinates } from "../../services/weather/types";

const RecentLocation = styled(Card)`
  width: 400px;
  cursor: pointer;
  max-width: 90vw;
  .ant-card-body {
    padding: 12px;
  }

  &:hover {
    font-weight: bold;
    transition: 100ms ease-in;
  }
`;

type Props = {
  onRecentSelected(coords: TCoordinates): void;
};

const RecentLocations: React.FC<Props> = ({ onRecentSelected }) => {
  const { getLocationData, removeLocationData } = LocalStorageService;
  const [recentLocations, setRecentLocations] = useState(getLocationData());

  const removeRecentLocation = (city: string, state: string) => {
    removeLocationData(city, state);
    setRecentLocations(getLocationData());
  };

  if (recentLocations.length === 0) {
    return null;
  }

  return (
    <div //inline styling should have been lifted to styled components - ran out of time
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: 24,
      }}
    >
      <h3 style={{ color: "white" }}>Recent Locations</h3>
      <Space direction="vertical">
        {recentLocations
          .reverse()
          .map(({ name: city, state, lat, lon }, index) => (
            <RecentLocation key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="location-name" onClick={() => onRecentSelected({ lat, lon })}>
                  {city}, {state}
                </span>
                <Tooltip title="Remove" mouseEnterDelay={0.3}>
                  <CloseOutlined
                    style={{ cursor: "pointer" }}
                    onClick={() => removeRecentLocation(city, state)}
                  />
                </Tooltip>
              </div>
            </RecentLocation>
          ))}
      </Space>
    </div>
  );
};

export default RecentLocations;
