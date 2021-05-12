import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: right;
`;

const Icon = styled.img`
  width: 15px;
  vertical-align: middle;
  margin: 0 5px;
`;

export const Interract: FC = () => {
  return (
    <Wrapper>
      <Icon src="./media/icons/comments.svg" />
      <span>Message</span>
      <Icon src="./media/icons/entities.svg" />
      <span>Create Request</span>
      <Icon src="./media/icons/bell.svg" />
      <span>Add to a cluster</span>
    </Wrapper>
  );
};

export default Interract;
