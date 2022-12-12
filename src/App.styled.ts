import { Layout as AntdLayout, Typography } from "antd";
import { Content as AntdContent } from "antd/es/layout/layout";
import styled from "styled-components";

const Layout = styled(AntdLayout)`
  min-height: 100vh;
  overflow-y: scroll;
  background-image: linear-gradient(
    to top,
    #051937,
    #072044,
    #092752,
    #0c2e60,
    #10366e
  );
`;

const Content = styled(AntdContent)`
  display: flex;
  justify-content: center;
  padding: 24px;
`;

const ForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultStatus = styled(Typography.Title)`
  margin: 0px;
  color: white !important;
`;

export { Layout, Content, ForecastContainer, ResultStatus };
