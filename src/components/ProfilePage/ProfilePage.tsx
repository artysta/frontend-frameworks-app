import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { Profile } from "./Profile";
import { Interract } from "./Interract";
import { Characteristics } from "./Characteristics";
import { Proposals } from "./Proposals";

const Wrapper = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  box-shadow: 0px 1px 3px ${Colors.gray2};
  background-color: ${Colors.white};
  color: ${Colors.blue1};
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const ProfilePage: FC = () => {
  return (
    <Wrapper>
      <Interract />
      <Profile />
      <Characteristics />
      <Proposals />
    </Wrapper>
  );
};

export default ProfilePage;
