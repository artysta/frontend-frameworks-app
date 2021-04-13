import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

const Wrapper = styled.div`
  position: absolute;
  background-color: ${Colors.white};
  border-radius: 0 0 4px 4px;
  border: solid #c7c7c7;
  box-shadow: 0px 1px 3px #c7c7c7;
  border-width: 0 1px 1px 1px;
  padding: 10px;
  margin: 25px 0 0 0;
`;

export const ExpandedMenu: FC = () => {
  return (
    <Wrapper>
      <input type="text" placeholder="Filter..." />
      <br />
      <span>Platform</span>
      <ul>
        <li>Home</li>
        <li>Publications</li>
        <li>People</li>
        <li>Entities</li>
        <li>Administration</li>
      </ul>
      <span>Workspaces</span>
      <ul>
        <li>Client contract</li>
        <li>Supplier contract</li>
        <li>Corporate</li>
        <li>Group Norms</li>
        <li>Real estate contracts</li>
      </ul>
    </Wrapper>
  );
};
export default ExpandedMenu;
