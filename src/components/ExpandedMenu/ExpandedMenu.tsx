import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  position: absolute;
  background-color: ${Colors.white};
  border-radius: 0 0 4px 4px;
  border: solid ${Colors.gray2};
  box-shadow: 0px 1px 3px ${Colors.gray2};
  border-width: 0 1px 1px 1px;
  margin: 25px 0 0 0;
  width: 300px;
  z-index: 99;

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
    border: 1px solid ${Colors.gray2};
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
  border-top: 1px solid ${Colors.gray2};
  border-bottom: 1px solid ${Colors.gray2};
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
            <Link to="/">
              <img src="./media/icons/house.svg" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/test">
              <img src="./media/icons/publications.svg" />
              Publications
            </Link>
          </li>
          <li>
            <Link to="/test">
              <img src="./media/icons/people.svg" />
              People
            </Link>
          </li>
          <li>
            <Link to="/entities">
              <img src="./media/icons/entities.svg" />
              Entities
            </Link>
          </li>
          <li>
            <Link to="/test">
              <img src="./media/icons/administration.svg" />
              Administration
            </Link>
          </li>
        </ul>
        <SectionTitle>Workspaces</SectionTitle>
        <ul>
          <li>
            <Link to="/workspace">
              <img src="./media/icons/entities2.svg" />
              Client contract
            </Link>
          </li>
          <li>
            <Link to="/workspace">
              <img src="./media/icons/house2.svg" />
              Supplier contract
            </Link>
          </li>
          <li>
            <Link to="/workspace">
              <img src="./media/icons/entities.svg" />
              Corporate
            </Link>
          </li>
          <li>
            <Link to="/workspace">
              <img src="./media/icons/house.svg" />
              Group Norms
            </Link>
          </li>
          <li>
            <Link to="/workspace">
              <img src="./media/icons/house.svg" />
              Real estate contracts
            </Link>
          </li>
        </ul>
      </OptionsWrapper>
      <AccountOptionsWrapper>
        <SectionTitle>Account</SectionTitle>
        <ul>
          <li>
            <Link to="/profile">
              <img src="./media/icons/house.svg" />
              User name
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img src="./media/icons/privacy.svg" />
              Privacy
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img src="./media/icons/settings.svg" />
            </Link>
            Settings
          </li>
        </ul>
      </AccountOptionsWrapper>
      <LogoutButtonWrapper>
        <img src="./media/icons/logout.svg" />
        <LogoutButton>
          <Link to="/test">Logout</Link>
        </LogoutButton>
      </LogoutButtonWrapper>
    </Wrapper>
  );
};
export default ExpandedMenu;
