import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors"

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const UserPhoto = styled.div`
  text-align: center;
  color: ${Colors.aqua2};

  img {
    margin: 10px;
    width: 100px;
    border-radius: 50%
  }
`;

const UserInformation = styled.div`
  width: 100%;
`;

const UserContact = styled.div`
  width: auto;
  display: flex;
  align-items: flex-end;
`;

export const Profile: FC = () => {
  return (
    <Wrapper>
      <UserPhoto>
        <img src="./media/photos/profile-photo.png" alt="User photo" />
        <p>See profile</p>
      </UserPhoto>
      <UserInformation>
        <p>
          Humberta Swift
          <br />
          Clifford Chance
          <br />
          New York
          <br />
          Parnert
        </p>
      </UserInformation>
      <UserContact>
        <p>
          humbertaswift@mail.com
          <br />
          +33 (0) 6 12 34 56 78
        </p>
      </UserContact>
    </Wrapper>
  );
};

export default Profile;
