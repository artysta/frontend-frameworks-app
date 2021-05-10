import { FC } from "react";
import styled from "styled-components";
import TopNav from "../TopNav/TopNav";
import LeftMenu from "../LeftMenu/LeftMenu";
import MainPage from "../MainPage/MainPage";


const Wrapper = styled.div`
  display: block;
`

const ContentWrapper = styled.div`
  display: flex;
`

export const MainWrapper: FC = () => {
  return (
    <Wrapper>
      <TopNav />
      <ContentWrapper>
        <LeftMenu />
        <MainPage />
      </ContentWrapper>
    </Wrapper>
  );
};

export default MainWrapper;