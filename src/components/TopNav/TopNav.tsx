import { FC } from "react";
import styled from "styled-components";

const NavWrapper = styled.div`
  background-color: white;
  margin-bottom: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  box-shadow: 0px 1px 3px #c7c7c7;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px;
`;

const HomeIcon = styled.img`
  margin: 10px;
`;

const NavTitle = styled.p`
  color: black;
  font-size: 30px;

  a {
    text-decoration: none;
    color: black;
    transition: 0.2s;

    :hover {
      color: #5783e9;
      transition: 0.2s;
    }
  }
`;

const SearchBoxInput = styled.input`
  border: 1px solid #c7c7c7;
  border-bottom: 3px solid #c7c7c7;
  border-radius: 5px;
  display: block;
  margin: auto;
  padding: 15px;
  text-align: center;
  width: 20%;
  outline: none;
  transition: 0.5s;

  :focus {
    border: 1px solid #5783e9;
    border-bottom: 3px solid #5783e9;
    border-radius: 5px;
    transition: 0.5s;
  }
`;

export const TopNav: FC = () => {
  return (
    <NavWrapper>
      <Logo src="./logo192.png" />
      <HomeIcon src="./media/icons/house.png" />
      <NavTitle>
        <a href="">Home</a>
      </NavTitle>
      <SearchBoxInput placeholder="Search..." />
    </NavWrapper>
  );
};

export default TopNav;