import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors"

const Wrapper = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  box-shadow: 0px 1px 3px ${Colors.gray2};
  justify-content: center;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const TestPage: FC = () => {
  return (
    <Wrapper>
      <span>This is a test page!</span>
    </Wrapper>
  );
};

export default TestPage;
