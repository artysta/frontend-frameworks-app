import { FC } from "react";
import styled from "styled-components";
import { Publication } from "../../entities/Publication";
import { Workspace } from "../../entities/Workspace";
import { FakePublicaitonsRepository } from "../../repositories/FakePublicationsRepository";
import { FakeWorkspacesRepository } from "../../repositories/FakeWorkspacesRepository";
import { FakeWorksRepository } from "../../repositories/FakeWorksRepository";
import { Repository } from "../../repositories/Repository";
import { Work } from "../../entities/Work";
import { Colors } from "../../styledHelpers/Colors"

const MainPageWrapper = styled.div`
  margin: 20px;
  border-radius: 5px;
  width: 100%;
  display: block;
  box-shadow: 0px 1px 3px ${Colors.gray2};
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const LatestPublicationsWrapper = styled.div`
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 1px 3px ${Colors.gray2};
  margin: 20px 0px;
`;

const LatestPublicationFeatured = styled.div`
  position: relative;
  background-image: url("./placeholder350.png");
  background-size: auto;
  background-repeat: no-repeat;
  background-size: 430px;
  width: 430px;
  height: 430px;
`;

const LatestPublicationFeaturedFooter = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
`;

const LatestPublications = styled.div`
  margin: 15px 0 15px 15px;
  width: 50%;
`;

const PublicationCard = styled.div`
  display: flex;
  margin: 15px 0px;

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
  box-shadow: 0px 1px 3px ${Colors.gray2};
  padding: 20px;

  div {
    display: block;
  }
`;

const ResumeYourWorkWrapper = styled.div``;

const YourWorkCard = styled.div`
  border-radius: 5px;
  display: flex;
  box-shadow: 0px 1px 3px ${Colors.gray2};
  padding: 20px;
  margin: 20px 0px;

  div {
    display: block;
  }
`;

const Title = styled.p`
  color: ${Colors.blue3};
  font-size: 20px;
`;

const ResumeYourWorkItemsWrapper = styled.div`
  display: flex;
`;

const Elements = styled.div`
  display: flex;
  margin-left: auto;
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
  width: 100%;
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

const FilterWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;

  input {
    width: 200px;
    padding: 10px;
    border: 1px solid ${Colors.gray2};
    border-radius: 5px;
    outline: none;
    margin-right: 10px;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;

  select {
    width: 200px;
    padding: 10px;
    border: 0;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    color: ${Colors.blue3};
  }
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
      <LatestPublicationsWrapper>
        <LatestPublicationFeatured>
          <LatestPublicationFeaturedFooter>
            {
              <div>
                <Title>{publications()[0].title}</Title>
                {publications()[0].date}
                <Icon src="./media/icons/people.svg" />
                {publications()[0].userName}
              </div>
            }
          </LatestPublicationFeaturedFooter>
        </LatestPublicationFeatured>
        <LatestPublications>
          <Title>Latest Publications</Title>
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
          <Title>See more publications</Title>
        </LatestPublications>
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
      <ResumeYourWorkWrapper>
        <ResumeYourWorkItemsWrapper>
          <Title>Resume Your Work</Title>
          <Elements>
            <FilterWrapper>
              <input type="text" placeholder="Filter by title..."></input>
            </FilterWrapper>
            <SelectWrapper>
              <select>
                <option value="followed">Followed</option>
              </select>
            </SelectWrapper>
          </Elements>
        </ResumeYourWorkItemsWrapper>
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
