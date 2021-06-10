import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { IUserReducer } from "../../reducers/userReducers";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IPostReducer } from "../../reducers/postReducers";

const Wrapper = styled.div`
  padding: 20px;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 20px;
`;

const HeaderPhoto = styled.div`
  background-image: url("./placeholder350.png");
  border-radius: 5px 5px 0 0;
  height: 300px;
`;

const Header = styled.div`
  height: 150px;
  background-color: ${Colors.white};
  display: flex;
  border-radius: 0 0 5px 5px;
`;

const HeaderIcon = styled.img`
  width: 80px;
  margin: 20px;
`;

const HeaderDetails = styled.div`
  margin: 20px;
`;

const HeaderTitle = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

const WorkspaceCard = styled.div`
  border-radius: 5px;
  display: flex;
  box-shadow: 0px 1px 3px ${Colors.gray2};
  padding: 20px;
  margin: 20px 0px;
  background-color: ${Colors.white};

  div {
    display: block;
  }
`;

const Title = styled.p`
  color: ${Colors.blue1};
  font-size: 20px;
`;

const WorkspaceItemsWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
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

const ButtonsContainer = styled.div`
  display: flex;
`;

const Button = styled("button")<{ bgColor: string; txtColor: string }>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.txtColor};
  border: 0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 0 10px;
`;

const ButtonIcon = styled.img`
  width: 15px;
  margin-right: 10px;

  :hover {
    cursor: pointer;
  }
`;

const InfoCard = styled.div`
  border-radius: 5px;
  box-shadow: 0px 1px 3px ${Colors.gray2};
  padding: 20px;
  background-color: ${Colors.white};
  width: 100%;
  margin: 10px;
`;

const InfoCardsContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;

const InfoCardIcon = styled.img`
  width: 45px;
  margin: 20px;
`;

export const ResumeYourWork: FC = () => {
  const posts = useSelector<IState, IPostReducer>((state) => ({
    ...state.posts,
  }));

  const users = useSelector<IState, IUserReducer>((state) => ({
    ...state.users,
  }));

  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderPhoto></HeaderPhoto>
        <Header>
          <HeaderIcon src="./media/icons/entities.svg" />
          <HeaderDetails>
            <HeaderTitle>Corporate Holdings</HeaderTitle>
            <p>
              sunt aut facere repellat provident occaecati excepturi optio
              reprehenderit quia et suscipit suscipit recusandae consequuntur
              expedita et cum reprehenderit molestiae ut ut quas totam nostrum
              rerum est autem sunt rem eveniet architecto
            </p>
          </HeaderDetails>
        </Header>
      </HeaderWrapper>
      <Title>Start working on corporate matters</Title>
      <InfoCardsContainer>
        <InfoCard>
          <InfoCardIcon src="./media/icons/entities.svg" />
          <Title>Explore your entities</Title>
          <br />
          <p>
            Take a few minutes to look at the most important elements and
            specificities of your entities.
          </p>
        </InfoCard>
        <InfoCard>
          <InfoCardIcon src="./media/icons/administration.svg" />
          <Title>Structure the ownership</Title>
          <br />
          <p>
            Get a clear view of the ownership by looking at the relations
            between individuals and entities.
          </p>
        </InfoCard>
        <InfoCard>
          <InfoCardIcon src="./media/icons/ecosystem.svg" />
          <Title>Define the calendar</Title>
          <br />
          <p>
            Prepare future events by creating detailed plans around the life of
            your entity.
          </p>
        </InfoCard>
      </InfoCardsContainer>
      <WorkspaceItemsWrapper>
        <Title>Last Updates</Title>
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
      </WorkspaceItemsWrapper>
      <ButtonsContainer>
        <Button bgColor={Colors.btnBlue1} txtColor={Colors.btnBlue2}>
          All
        </Button>
        <Button bgColor={Colors.btnGreen1} txtColor={Colors.btnGreen2}>
          <ButtonIcon src="./media/icons/share.svg" />
          SAS
        </Button>
        <Button bgColor={Colors.btnAqua1} txtColor={Colors.btnAqua2}>
          <ButtonIcon src="./media/icons/network.svg" />
          SARL
        </Button>
        <Button bgColor={Colors.btnYellow1} txtColor={Colors.btnYellow2}>
          <ButtonIcon src="./media/icons/ecosystem.svg" />
          Secondary business
        </Button>
        <Button bgColor={Colors.btnGray1} txtColor={Colors.btnGray2}>
          <ButtonIcon src="./media/icons/bell.svg" />
          Communities
        </Button>
        <Button bgColor={Colors.btnGray3} txtColor={Colors.btnGray4}>
          <ButtonIcon src="./media/icons/house.svg" />
          POA
        </Button>
        <Button bgColor={Colors.white} txtColor={Colors.btnGray1}>
          <ButtonIcon src="./media/icons/comments.svg" />
          Survey
        </Button>
        <Button bgColor={Colors.white} txtColor={Colors.btnGray1}>
          ...
        </Button>
      </ButtonsContainer>
      {posts.postsList.map((post) => (
        <WorkspaceCard>
          <CardDetails>
            <Title>{post.title}</Title>
            <p>{post.body}</p>
            <p>
              {users.userList.find((user) => user.id === post.userId)?.email}
            </p>
          </CardDetails>
        </WorkspaceCard>
      ))}
    </Wrapper>
  );
};

export default ResumeYourWork;
