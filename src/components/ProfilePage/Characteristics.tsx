import { FC, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

const Wrapper = styled.div`
  border-top: solid 1px ${Colors.gray3};
  padding-top: 10px;
`;

const Title = styled.p`
  color: ${Colors.gray1};
`;

const Tag = styled.select`
  background-color: ${Colors.aqua1};
  color: ${Colors.aqua2};
  border: 0;
  padding: 5px 10px;
  margin: 10px;
  border-radius: 5px;
  transition: 0.2s;

  :enabled {
    color: ${Colors.btnBlue2};
    background-color: ${Colors.btnBlue1};
    transition: 0.2s;

    :hover {
      background-color: ${Colors.blue3};
      color: ${Colors.white};
      transition: 0.2s;
    }
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  float: right;

  :hover {
    cursor: pointer;
  }
`;

const TagsContainer = styled.div``;

export const Characteristics: FC = () => {
  const [editable, setEnabled] = useState(true);

  const handleEdit = () => {
    setEnabled(function changeValue(value) {
      return !value;
    });
  };

  return (
    <Wrapper>
      <TagsContainer>
        <Icon src="./media/icons/settings.svg" onClick={handleEdit}></Icon>
        <Title>Expertise</Title>
        <Tag disabled={editable}>
          <option>Mergers and acquisition</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </Tag>
      </TagsContainer>
      <TagsContainer>
        <Title>Specialties</Title>
        <Tag disabled={editable}>
          <option>Cross border operation</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 4</option>
        </Tag>
        <Tag disabled={editable}>
          <option>Transaction over 500M€/$</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </Tag>
      </TagsContainer>
      <TagsContainer>
        <Title>Admission to practice law</Title>
        <Tag disabled={editable}>
          <option>Paris bar association</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </Tag>
        <Tag disabled={editable}>
          <option>Tunissian bar association</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </Tag>
      </TagsContainer>
      <TagsContainer>
        <Title>Counties</Title>
        <Tag disabled={editable}>
          <option>Tunisia</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </Tag>
      </TagsContainer>
    </Wrapper>
  );
};

export default Characteristics;
