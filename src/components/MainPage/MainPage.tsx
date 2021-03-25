import { FC } from "react";
import styled from "styled-components";
import { Publication } from "../../entities/Publication";
import { FakePublicaitonsRepository } from "../../repositories/FakePublicationsRepository";
import { Repository } from "../../repositories/Repository";

const MainPageWrapper = styled.div`
  margin: 20px;
  border-radius: 5px;
  width: 100%;
  display: block;
  box-shadow: 0px 1px 3px #c7c7c7;
  padding: 20px;
`;

const LatestPublicationsWrapper = styled.div``;

const PublicationCard = styled.div`
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

const WorkspaceCard = styled.div`
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

const YourWorkCard = styled.div`
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

function publications(): Publication[] {
  let data: Repository<Publication> = new FakePublicaitonsRepository();
  return data.getAll();
}

export const MainPage: FC = () => {
  return (
    <MainPageWrapper>
      <Title>Latest Publications</Title>

      <LatestPublicationsWrapper>
        {publications().map((p, i) => (
          <PublicationCard>
            <img src="./logo192.png"></img>
            <div>
              <p>{p.title}</p>
              <p>{p.date}</p>
              <p>{p.userName}</p>
            </div>
          </PublicationCard>
        ))};
      </LatestPublicationsWrapper>
      <Title>Workspaces</Title>
      <WorkspacesWrapper>
        <WorkspaceCard>
          <img src="./logo192.png"></img>
          <div>
            <p>Lorem ipsum 1</p>
            <p>Dolor 1</p>
            <p>Sit 1</p>
            <p>01.01.1970</p>
          </div>
        </WorkspaceCard>
        <WorkspaceCard>
          <img src="./logo192.png"></img>
          <div>
            <p>Lorem ipsum 2</p>
            <p>Dolor 2</p>
            <p>Sit 2</p>
            <p>01.01.1970</p>
          </div>
        </WorkspaceCard>
        <WorkspaceCard>
          <img src="./logo192.png"></img>
          <div>
            <p>Lorem ipsum 3</p>
            <p>Dolor 3</p>
            <p>Sit 3</p>
            <p>01.01.1970</p>
          </div>
        </WorkspaceCard>
      </WorkspacesWrapper>
      <Title>ResumeYourWork</Title>
      <ResumeYourWorkWrapper>
        <YourWorkCard>
          <img src="./logo192.png"></img>
          <div>
            <p>Lorem ipsum 1</p>
            <p>Dolor 1</p>
            <p>Sit 1</p>
            <p>01.01.1970</p>
          </div>
        </YourWorkCard>
        <YourWorkCard>
          <img src="./logo192.png"></img>
          <div>
            <p>Lorem ipsum 2</p>
            <p>Dolor 2</p>
            <p>Sit 2</p>
            <p>01.01.1970</p>
          </div>
        </YourWorkCard>
        <YourWorkCard>
          <img src="./logo192.png"></img>
          <div>
            <p>Lorem ipsum 3</p>
            <p>Dolor 3</p>
            <p>Sit 3</p>
            <p>01.01.1970</p>
          </div>
        </YourWorkCard>
      </ResumeYourWorkWrapper>
    </MainPageWrapper>
  );
};

export default MainPage;
