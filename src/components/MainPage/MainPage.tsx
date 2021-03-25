import { FC } from "react";
import styled from "styled-components";

const MainPageWrapper = styled.div`
  margin: 20px;
  border-radius: 5px;
  width: 100%;
  display: block;
  box-shadow: 0px 1px 3px #c7c7c7;
  padding: 20px;
`;

const LatestPublicationsWrapper = styled.div``;

const Publication = styled.div`
  border-radius: 5px;
  display: flex;
  box-shadow: 0px 1px 3px #c7c7c7;
  padding: 20px;
  margin: 20px 0px;

  div {
    display: block;
  }
`;

const WorkspacesWrapper = styled.div`
  display: flex;
  padding: 20px 0px;
`;

const Workspace = styled.div`
  margin-right: 20px;
  border-radius: 5px;
  display: flex;
  box-shadow: 0px 1px 3px #c7c7c7;
  padding: 20px;

  div {
    display: block;
  }
`;

const ResumeYourWorkWrapper = styled.div``;

const YourWork = styled.div`
  border-radius: 5px;
  display: flex;
  box-shadow: 0px 1px 3px #c7c7c7;
  padding: 20px;
  margin: 20px 0px;

  div {
    display: block;
  }
`;

const Title = styled.p`
  color: #5783e9;
  font-size: 20px;
`;

export const MainPage: FC = () => {
  return (
    <MainPageWrapper>
      <Title>Latest Publications</Title>

      <LatestPublicationsWrapper>
        <Publication>
          <img src="./logo192.png"></img>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>01.01.1970</p>
            <p>Lorem 1</p>
          </div>
        </Publication>
        <Publication>
          <img src="./logo192.png"></img>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>01.01.1970</p>
            <p>Lorem 2</p>
          </div>
        </Publication>
        <Publication>
          <img src="./logo192.png"></img>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>01.01.1970</p>
            <p>Lorem 3</p>
          </div>
        </Publication>
      </LatestPublicationsWrapper>
      <Title>Workspaces</Title>
      <WorkspacesWrapper>
        <Workspace>
          <img src="./logo192.png"></img>
          <div>
            <p>Lorem ipsum 1</p>
            <p>Dolor 1</p>
            <p>Sit 1</p>
            <p>01.01.1970</p>
          </div>
        </Workspace>
        <Workspace>
          <img src="./logo192.png"></img>
          <div>
            <p>Lorem ipsum 2</p>
            <p>Dolor 2</p>
            <p>Sit 2</p>
            <p>01.01.1970</p>
          </div>
        </Workspace>
        <Workspace>
          <img src="./logo192.png"></img>
          <div>
            <p>Lorem ipsum 3</p>
            <p>Dolor 3</p>
            <p>Sit 3</p>
            <p>01.01.1970</p>
          </div>
        </Workspace>
      </WorkspacesWrapper>
      <Title>ResumeYourWork</Title>
      <ResumeYourWorkWrapper>
        <YourWork>
          <img src="./logo192.png"></img>
          <div>
            <p>Lorem ipsum 1</p>
            <p>Dolor 1</p>
            <p>Sit 1</p>
            <p>01.01.1970</p>
          </div>
        </YourWork>
        <YourWork>
          <img src="./logo192.png"></img>
          <div>
            <p>Lorem ipsum 2</p>
            <p>Dolor 2</p>
            <p>Sit 2</p>
            <p>01.01.1970</p>
          </div>
        </YourWork>
        <YourWork>
          <img src="./logo192.png"></img>
          <div>
            <p>Lorem ipsum 3</p>
            <p>Dolor 3</p>
            <p>Sit 3</p>
            <p>01.01.1970</p>
          </div>
        </YourWork>
      </ResumeYourWorkWrapper>
    </MainPageWrapper>
  );
};

export default MainPage;
