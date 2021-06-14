import { FC, useState } from "react";
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

const EditableField = styled.input`
  border: 0;
  outline: none;
  margin: 2px;

  :enabled {
    border: 1px solid ${Colors.blue3};
    border-radius: 3px;

    :focus {

    }
  }

  :disabled {
    background-color: ${Colors.white};
  }

`

const Icon = styled.img`
  width: 20px;
  height: 20px;

  :hover {
    cursor: pointer;
  }
`;


export const Profile: FC = () => {
  const [editable, setEnabled] = useState(true);
  
  const handleEdit = () => {
    setEnabled(function changeValue(value) {
      return !value;
    });
  };

  return (
    <Wrapper>
      <UserPhoto>
        <img src="./media/photos/profile-photo.png" alt="User photo" />
        <p>See profile</p>
      </UserPhoto>
      <UserInformation>
        <EditableField disabled={editable} defaultValue="Humberta Swift" contentEditable={true}/>
        <br />
        <EditableField disabled={editable} defaultValue="Clifford Chance" contentEditable={true}/>
        <br />
        <EditableField disabled={editable} defaultValue="New York" contentEditable={true}/>
          <br />
        <EditableField disabled={editable} defaultValue="Parnert" contentEditable={true}/>
        <br />
      <Icon src="./media/icons/settings.svg" onClick={handleEdit}></Icon>
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
