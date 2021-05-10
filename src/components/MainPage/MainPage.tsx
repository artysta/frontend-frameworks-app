import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { LatestPublications } from "../LatestPublications/LatestPublications";
import ResumeYourWork from "../ResumeYourWork/ResumeYourWork";
import { Workspaces } from "../Workspaces/Workspaces";

const Wrapper = styled.div`
  margin: 20px;
  border-radius: 5px;
  width: 100%;
  display: block;
  box-shadow: 0px 1px 3px ${Colors.gray2};
  padding: 20px;
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
