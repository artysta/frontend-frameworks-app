import { FC } from "react";
import styled from "styled-components";
import { Publication } from "../../entities/Publication";
import { FakePublicaitonsRepository } from "../../repositories/FakePublicationsRepository";
import { Repository } from "../../repositories/Repository";
import { Colors } from "../../styledHelpers/Colors";
import { IPostReducer } from "../../reducers/postReducers";
import { IUserReducer } from "../../reducers/userReducers";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";

const LatestPublicationsWrapper = styled.div`
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 1px 3px ${Colors.gray2};
  margin: 20px 0px;
  background-color: ${Colors.white};
`;

const LatestPublicationFeatured = styled.div`
  position: relative;
  background-image: url("./media/photos/publication-photo-3.jpg");
  background-repeat: no-repeat;
  background-size: 1000px;
  width: 430px;
  height: 430px;
  border-radius: 5px 0 0 5px;

  span {
    color: ${Colors.white};
  }
`;

const LatestPublicationFeaturedFooter = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
`;

const LatestPublicationsRest = styled.div`
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

const Title = styled("p")<{ txtColor: string }>`
  color: ${(props) => props.txtColor};
  font-size: 20px;
`;

const CardDetails = styled.div`
  display: table-cell;
  position: relative;
  padding: 10px;
  width: 100%;
  color: ${Colors.gray1};
`;

const CardFooter = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const ProfilePhoto = styled.img`
  width: 20px;
  vertical-align: middle;
  margin: 0 5px;
  border-radius: 50%;
`;

export const LatestPublications: FC = () => {
  const posts = useSelector<IState, IPostReducer>((state) => ({
    ...state.posts,
  }));

  const users = useSelector<IState, IUserReducer>((state) => ({
    ...state.users,
  }));

  return (
    <LatestPublicationsWrapper>
      <LatestPublicationFeatured>
        <LatestPublicationFeaturedFooter>
          {
            <div>
              <Title txtColor={Colors.white}>{posts.postsList[0]?.title}</Title>
              <span>7 jan. 2020</span>
              <ProfilePhoto src="./media/photos/profile-photo.png" />
              <span>
                {
                  users.userList.find(
                    (user) => user.id === posts.postsList[0].userId
                  )?.name
                }
              </span>
            </div>
          }
        </LatestPublicationFeaturedFooter>
      </LatestPublicationFeatured>
      <LatestPublicationsRest>
        <Title txtColor={Colors.blue1}>Latest Publications</Title>
        {posts.postsList.slice(49, 52).map((post, index) => (
          <PublicationCard>
            <Image
              src={"/media/photos/publication-photo-" + (index % 3) + ".jpg"}
            />
            <CardDetails>
              <Title txtColor={Colors.blue1}>{post.title}</Title>
              <CardFooter>
                7 jan. 2020
                <ProfilePhoto src="./media/photos/profile-photo.png" />
                {users.userList.find((user) => user.id === post.userId)?.name}
              </CardFooter>
            </CardDetails>
          </PublicationCard>
        ))}
        <Title txtColor={Colors.blue2}>See more publications</Title>
      </LatestPublicationsRest>
    </LatestPublicationsWrapper>
  );
};

export default LatestPublications;
