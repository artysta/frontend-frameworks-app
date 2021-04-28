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
  margin: 25px 0 0 0;
  width: 300px;

  ul {
    li {
      padding: 7px;
      display: flex;
    }
  }

  img {
    margin-right: 15px;
  }
`;

const SectionTitle = styled.span`
  font-size: 15px;
`;

const FilterWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    padding: 10px;
    margin: 10px;
    border: 1px solid #c7c7c7;
    border-radius: 5px;
    outline: none;
  }
`;

const OptionsWrapper = styled.div`
  height: 350px;
  overflow: auto;
  padding: 10px;
`;

const AccountOptionsWrapper = styled.div`
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #c7c7c7;
  padding: 10px;
`;

const LogoutButtonWrapper = styled.span`
  position: relative;

  img {
    position: absolute;
    margin-top: 23px;
    margin-left: 90px;
  }
`;

const LogoutButton = styled.span`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const ExpandedMenu: FC = () => {
  return (
    <Wrapper>
      <FilterWrapper>
        <input type="text" placeholder="Filter..."></input>
      </FilterWrapper>
      <OptionsWrapper>
        <SectionTitle>Platform</SectionTitle>
        <ul>
          <li>
            <img src="./media/icons/house.svg" />
            Home
          </li>
          <li>
            <img src="./media/icons/publications.svg" />
            Publications
          </li>
          <li>
            <img src="./media/icons/people.svg" />
            People
          </li>
          <li>
            <img src="./media/icons/entities.svg" />
            Entities
          </li>
          <li>
            <img src="./media/icons/administration.svg" />
            Administration
          </li>
        </ul>
        <SectionTitle>Workspaces</SectionTitle>
        <ul>
          <li>
            <img src="./media/icons/entities2.svg" />
            Client contract
          </li>
          <li>
            <img src="./media/icons/house2.svg" />
            Supplier contract
          </li>
          <li>
            <img src="./media/icons/entities.svg" />
            Corporate
          </li>
          <li>
            <img src="./media/icons/house.svg" />
            Group Norms
          </li>
          <li>
            <img src="./media/icons/house.svg" />
            Real estate contracts
          </li>
        </ul>
      </OptionsWrapper>
      <AccountOptionsWrapper>
        <SectionTitle>Account</SectionTitle>
        <ul>
          <li>
            <img src="./media/icons/house.svg" />
            User name
          </li>
          <li>
            <img src="./media/icons/privacy.svg" />
            Privacy
          </li>
          <li>
            <img src="./media/icons/settings.svg" />
            Settings
          </li>
        </ul>
      </AccountOptionsWrapper>
      <LogoutButtonWrapper>
      <img src="./media/icons/logout.svg" />
      <LogoutButton>
          Logout
        </LogoutButton>
        </LogoutButtonWrapper>
    </Wrapper>
  );
};
export default ExpandedMenu;
