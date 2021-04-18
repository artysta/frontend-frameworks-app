import { FC } from "react";
import styled from "styled-components";
import useDropdown from "react-dropdown-hook";
import ExpandedMenu from "../ExpandedMenu/ExpandedMenu";

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

const NavMenu = styled.p`
  color: black;
  font-size: 20px;
  transition: 0.5s;
  cursor: pointer;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  span {
    transition: 0.5s;

    :hover {
      color: #5783e9;
      transition: 0.5s;
    }
  }

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

const Icon = styled.img`
  margin: 10px;
  width: 35px;
  height: 35px;
  
  :hover {
    cursor: pointer;
  }
`;

const IconContainer = styled.div`
  background-color: #dddddd;
  border-radius: 50%;
  display: flex;
  padding: 5px;
  margin: 10px;
`;

export const TopNav: FC = () => {
  const [
    wrapperRef,
    dropdownOpen,
    toggleDropdown,
    closeDropdown,
  ] = useDropdown();

  return (
    <NavWrapper>
      <Logo src="./logo192.png" />
      <HomeIcon src="./media/icons/house.png" />
      <NavMenu ref={wrapperRef}>
        <div onClick={toggleDropdown}>
          <span>Menu</span>
        </div>
        {dropdownOpen && <>{<ExpandedMenu />}</>}
      </NavMenu>
      <SearchBoxInput placeholder="Search..." />
      <Icon src="./media/icons/house.svg" />
      <IconContainer>
        <Icon src="./media/icons/comments.svg" />
      </IconContainer>
      <IconContainer>
        <Icon src="./media/icons/bell.svg" />
      </IconContainer>
    </NavWrapper>
  );
};

export default TopNav;
