import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { LatestPublications } from "../LatestPublications/LatestPublications";
import ResumeYourWork from "../ResumeYourWork/ResumeYourWork";
import { Workspaces } from "../Workspaces/Workspaces";

const Wrapper = styled.div`
  width: 100%;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const MainPage: FC = () => {
  return (
    <Wrapper>
      <LatestPublications />
      <Workspaces />
      <ResumeYourWork />
    </Wrapper>
  );
};

export default MainPage;
