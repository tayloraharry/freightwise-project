import { Button as AntdButton } from "antd";
import { GoLocation } from "react-icons/go";
import styled from "styled-components";

const Button = styled(AntdButton)`
  color: white;
  margin: 12px 0px;
`;

const ButtonContents = styled.div`
  display: flex;
  justify-ontent: center;
  alignitems: center;
`;

const LocationIcon = styled(GoLocation)`
  margin-left: 4px;
  font-size: 20px;
  color: tomato;
`

export {
    Button,
    ButtonContents,
    LocationIcon
}
