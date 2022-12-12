import { Form, Input } from "antd";
import styled from "styled-components";

const LocationFormItem = styled(Form.Item)`
  margin-bottom: 0px;
`;

const LocationInput = styled(Input)`
  background-color: transparent;
  color: white;
  font-size: 18px;

  .ant-input,
  .ant-input::placeholder {
    background-color: transparent;
    width: 140px;
    color: white;
    font-size: 18px;
  }

  &::placeholder {
    color: #d3d3d3;
  }

  button {
    padding: 0px;
    color: white;
  }

  span.ant-input-suffix > span.anticon {
    font-size: 24px;
    transform: rotate(90deg);
    margin-right: -6px;
  }
`;

export { LocationFormItem, LocationInput };
