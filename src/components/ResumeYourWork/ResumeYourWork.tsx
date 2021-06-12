import { FC, useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { ICommentReducer } from "../../reducers/commentReducers";
import { IUserReducer } from "../../reducers/userReducers";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { PaginationContainer } from "../../styledHelpers/Components";

const ResumeYourWorkWrapper = styled.div`
  color: ${Colors.blue1};
`;

const YourWorkCard = styled.div`
  border-radius: 5px;
  display: flex;
  box-shadow: 0px 1px 3px ${Colors.gray2};
  padding: 20px;
  margin: 20px 0px;
  background-color: ${Colors.white};
`;

const Title = styled.p`
  color: ${Colors.blue1};
  font-size: 20px;
`;

const CardTitle = styled.p`
  color: ${Colors.blue2};
  font-size: 20px;
`;

const ResumeYourWorkItemsWrapper = styled.div`
  display: flex;
`;

const Elements = styled.div`
  display: flex;
  margin-left: auto;
`;

const CardDetails = styled.div``;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 5px;
  margin-left: 5px;
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

export const ResumeYourWork: FC = () => {
  const comments = useSelector<IState, ICommentReducer>((state) => ({
    ...state.comments,
  }));

  const users = useSelector<IState, IUserReducer>((state) => ({
    ...state.users,
  }));

  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlePageChange = (data: any) => {
    const selected = data.selected;
    setCurrentPage(selected);
  };

  return (
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
      {comments.commentsList
        .slice(currentPage, currentPage + 8)
        .map((comment) => (
          <YourWorkCard>
            <CardDetails>
              <CardTitle>{comment.name}</CardTitle>
              <br />
              <p>{comment.body}</p>
              <br />
              <UserInfo>
                <Icon src={"./media/icons/people.svg"} />
                {
                  users.userList.find((user) => user.id === comment.postId)
                    ?.name
                }{" "}
                &#8226;
                <Icon src={"./media/icons/house.svg"} />
                Corporate &#8226; Updated 3 days ago by{" "}
                {
                  users.userList.find((user) => user.id === comment.postId)
                    ?.name
                }
              </UserInfo>
            </CardDetails>
          </YourWorkCard>
        ))}
      <PaginationContainer>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={comments.commentsList.length}
          marginPagesDisplayed={3}
          pageRangeDisplayed={9}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </PaginationContainer>
    </ResumeYourWorkWrapper>
  );
};

export default ResumeYourWork;
