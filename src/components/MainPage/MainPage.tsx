import { FC } from "react";
import styled from "styled-components";
import { Publication } from "../../entities/Publication";
import { Workspace } from "../../entities/Workspace";
import { FakePublicaitonsRepository } from "../../repositories/FakePublicationsRepository";
import { FakeWorkspacesRepository } from "../../repositories/FakeWorkspacesRepository";
import { FakeWorksRepository } from "../../repositories/FakeWorksRepository";
import { Repository } from "../../repositories/Repository";
import { Work } from "../../entities/Work";

const MainPageWrapper = styled.div`
  margin: 20px;
  border-radius: 5px;
  width: 100%;
  display: block;
  box-shadow: 0px 1px 3px #c7c7c7;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const LatestPublicationsWrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0px 1px 3px #c7c7c7;
  padding: 20px;
  margin: 20px 0px;
`;

const PublicationCard = styled.div`
  display: flex;
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
  width: 100%;
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

const CardDetails = styled.div`
  display: table-cell;
  position: relative;
  padding: 10px;
  width: 100%;
`;

const CardFooter = styled.div`
  position: absolute;
  bottom: 10px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Icon = styled.img`
  width: 15px;
  vertical-align: middle;
  margin: 0 5px;
`;

function publications(): Publication[] {
  let data: Repository<Publication> = new FakePublicaitonsRepository();
  return data.getAll();
}

function workspaces(): Workspace[] {
  let data: Repository<Workspace> = new FakeWorkspacesRepository();
  return data.getAll();
}

function works(): Work[] {
  let data: Repository<Work> = new FakeWorksRepository();
  return data.getAll();
}

export const MainPage: FC = () => {
  return (
    <MainPageWrapper>
      <Title>Latest Publications</Title>
      <LatestPublicationsWrapper>
        {publications().map((p, i) => (
          <PublicationCard>
            <Image src="./placeholder350.png" />
            <CardDetails>
              <Title>{p.title}</Title>
              <CardFooter>
                <p>
                  <Icon src="./media/icons/entities.png" />
                  {p.date} &bull; {p.userName}
                </p>
              </CardFooter>
            </CardDetails>
          </PublicationCard>
        ))}
      </LatestPublicationsWrapper>
      <Title>Workspaces</Title>
      <WorkspacesWrapper>
        {workspaces().map((w, i) => (
          <WorkspaceCard>
            <Image src="./placeholder350.png" />
            <CardDetails>
              <Title>{w.title}</Title>
              <CardFooter>
                <p>
                  <Icon src="./media/icons/entities.png" />
                  {w.type} &bull; {w.numberOfUsers} &bull; {w.lastUpdated}
                </p>
              </CardFooter>
            </CardDetails>
          </WorkspaceCard>
        ))}
      </WorkspacesWrapper>
      <Title>ResumeYourWork</Title>
      <ResumeYourWorkWrapper>
        {works().map((w, i) => (
          <YourWorkCard>
            <CardDetails>
              <Title>{w.title}</Title>
              <p>{w.contents}</p>
              <p>
                {w.type} &bull; {w.lastUpdated}
              </p>
            </CardDetails>
          </YourWorkCard>
        ))}
      </ResumeYourWorkWrapper>
    </MainPageWrapper>
  );
};

export default MainPage;
