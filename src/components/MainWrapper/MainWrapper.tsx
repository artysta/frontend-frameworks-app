import { FC } from "react";
import styled from "styled-components";
import TopNav from "../TopNav/TopNav";
import LeftMenu from "../LeftMenu/LeftMenu";
import MainPage from "../MainPage/MainPage";


const Wrapper = styled.div`
  display: flex;
`

export const MainWrapper: FC = () => {
  return (
    <Wrapper>
      <LeftMenu />
      <MainPage />
    </Wrapper>
  );
};

export default MainWrapper;