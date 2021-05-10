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
  background-color: ${Colors.blue3};
  color: ${Colors.blue3};
  width: 95%;
  height: 1px;
  border-width: 0px;
`;

const MenuIcon = styled.img`
  margin: 10px;
`;

const UserMenuIcon = styled.img`
  border: 1px solid ${Colors.black};
  padding: 5px 15px;
  border-radius: 5px;
  margin: 10px;
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
              <UserMenuIcon src="./media/icons/user-plus.png" />
            </li>
            <li>
              <MenuIcon src="./media/icons/publications.png" />
              <Link to="/test">Your Publications</Link>
              <UserMenuIcon src="./media/icons/plus.png" />
            </li>
          </ul>
        </MenuOptionsWrapper>
      </Panel>
      <MenuOptionsWrapper>
        <ul>
          <li>
            <MenuIcon src="./media/icons/publications.png" />
            <Link to="/test">Publications</Link>
          </li>
          <li>
            <MenuIcon src="./media/icons/ecosystem.png" />
            <Link to="/test">Ecosystem</Link>
          </li>
          <li>
            <MenuIcon src="./media/icons/entities.png" />
            <Link to="/entities">Entities</Link>
          </li>
        </ul>
      </MenuOptionsWrapper>
    </LeftMenuWrapper>
  );
};

export default LeftMenu;
