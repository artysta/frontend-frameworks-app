import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { Link } from "react-router-dom";

const LeftMenuWrapper = styled.div`
  display: block;
  margin: 20px;
`;

const Panel = styled.div`
  margin-bottom: 15px;
  border-radius: 5px;
  width: 270px;
  display: block;
  text-align: center;
  box-shadow: 0px 1px 3px ${Colors.gray2};
`;

const MenuOptionsWrapper = styled.div`
  text-align: left;
  font-size: 20px;

  ul {
    li {
      display: flex;
      align-items: center;
      padding: 5px;
      a {
        color: ${Colors.black};
        text-decoration: none;
        transition: 0.2s;

        :hover {
          color: ${Colors.blue2};
          transition: 0.2s;
        }
      }
    }
  }
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px;
`;

const UserName = styled.p`
  color: ${Colors.blue3};
  font-size: 20px;
`;

const UserJobTitle = styled.p`
  color: ${Colors.gray2};
  font-size: 15px;
`;

const Line = styled.hr`
  background-color: ${Colors.gray3};
  color: ${Colors.gray3};
  width: 95%;
  height: 1px;
  border-width: 0px;
`;

const MenuIcon = styled.img`
  margin: 10px;
`;

const UserMenuIcon = styled.img`
  border: 1px solid ${Colors.gray1};
  padding: 5px 15px;
  border-radius: 5px;
  margin: 10px;
  margin-left: auto;
  box-shadow: 0px 1px 3px ${Colors.gray2};
`;

export const LeftMenu: FC = () => {
  return (
    <LeftMenuWrapper>
      <Panel>
        <UserImage src="./logo192.png" />
        <Link to="/profile">
          <UserName>Lorem ipsum</UserName>
          <UserJobTitle>Job title - Company</UserJobTitle>
        </Link>
        <Line />
        <MenuOptionsWrapper>
          <ul>
            <li>
              <MenuIcon src="./media/icons/network.png" />
              <Link to="/test">Your Network</Link>
              <UserMenuIcon src="./media/icons/user-plus.svg" />
            </li>
            <li>
              <MenuIcon src="./media/icons/publications.svg" />
              <Link to="/test">Your Publications</Link>
              <UserMenuIcon src="./media/icons/plus.svg" />
            </li>
          </ul>
        </MenuOptionsWrapper>
      </Panel>
      <MenuOptionsWrapper>
        <ul>
          <li>
            <MenuIcon src="./media/icons/publications.svg" />
            <Link to="/test">Publications</Link>
          </li>
          <li>
            <MenuIcon src="./media/icons/ecosystem.svg" />
            <Link to="/test">Ecosystem</Link>
          </li>
          <li>
            <MenuIcon src="./media/icons/entities.svg" />
            <Link to="/entities">Entities</Link>
          </li>
        </ul>
      </MenuOptionsWrapper>
    </LeftMenuWrapper>
  );
};

export default LeftMenu;
