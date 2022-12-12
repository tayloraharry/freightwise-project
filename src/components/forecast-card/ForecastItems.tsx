import { Descriptions } from "antd";
import React, { ReactElement } from "react";
import { ForecastItemLabel } from "./styled";

type TForecastItem = {
  icon: ReactElement;
  description: string;
  value: string | number | ReactElement;
};

const ForecastItems: React.FC<{ items: Array<TForecastItem> }> = ({
  items,
}) => {
  return (
    <Descriptions colon={false} column={1} style={{ paddingTop: 24 }}>
      {items.map(({ icon, description, value }, index) => (
        <Descriptions.Item
          key={index}
          label={
            <ForecastItemLabel>
              {icon}
              {description}
            </ForecastItemLabel>
          }
          contentStyle={{
            display: "block",
            textAlign: "right",
          }}
        >
          {value}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
};

export default ForecastItems;
