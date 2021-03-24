import { FC } from "react";
import styled from "styled-components";

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
  box-shadow: 0px 1px 3px #c7c7c7;
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
        color: black;
        text-decoration: none;
        transition: 0.2s;

        :hover {
          color: #5783e9;
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
  color: #5783e9;
  font-size: 20px;
`;

const UserJobTitle = styled.p`
  color: gray;
  font-size: 15px;
`;

const Line = styled.hr`
  background-color: #5783e9;
  color: #5783e9;
  width: 95%;
  height: 1px;
  border-width: 0px;
`;

const MenuIcon = styled.img`
  margin: 10px;
`;

const UserMenuIcon = styled.img`
  border: 1px solid #000000;
  padding: 5px 15px;
  border-radius: 5px;
  margin: 10px;
`;

export const LeftMenu: FC = () => {
  return (
    <LeftMenuWrapper>
      <Panel>
        <UserImage src="./logo192.png" />
        <UserName>Lorem ipsum</UserName>
        <UserJobTitle>Job title - Company</UserJobTitle>
        <Line />
        <MenuOptionsWrapper>
          <ul>
            <li>
              <MenuIcon src="./media/icons/network.png" />
              <a href="">Your Network</a>
              <UserMenuIcon src="./media/icons/user-plus.png" />
            </li>
            <li>
              <MenuIcon src="./media/icons/publications.png" />
              <a href="">Your Publications</a>
              <UserMenuIcon src="./media/icons/plus.png" />
            </li>
          </ul>
        </MenuOptionsWrapper>
      </Panel>
      <MenuOptionsWrapper>
        <ul>
          <li>
            <MenuIcon src="./media/icons/publications.png" />
            <a href="">Publications</a>
          </li>
          <li>
            <MenuIcon src="./media/icons/ecosystem.png" />
            <a href="">Ecosystem</a>
          </li>
          <li>
            <MenuIcon src="./media/icons/entities.png" />
            <a href="">Entities</a>
          </li>
        </ul>
      </MenuOptionsWrapper>
    </LeftMenuWrapper>
  );
};
