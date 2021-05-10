import { FC } from "react";
import styled from "styled-components";
import useDropdown from "react-dropdown-hook";
import ExpandedMenu from "../ExpandedMenu/ExpandedMenu";
import { Colors } from "../../styledHelpers/Colors";
import { Link } from "react-router-dom";

const NavWrapper = styled.div`
  background-color: ${Colors.white};
  margin-bottom: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  box-shadow: 0px 1px 3px ${Colors.gray2};
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
  color: ${Colors.black};
  font-size: 20px;
  transition: 0.5s;
  cursor: pointer;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  span {
    transition: 0.5s;

    :hover {
      color: ${Colors.blue3};
      transition: 0.5s;
    }
  }

  a {
    text-decoration: none;
    color: ${Colors.black};
    transition: 0.2s;

    :hover {
      color: ${Colors.blue3};
      transition: 0.2s;
    }
  }
`;

const SearchBoxInput = styled.input`
  border: 1px solid ${Colors.gray2};
  border-bottom: 3px solid ${Colors.gray2};
  border-radius: 5px;
  display: block;
  margin: auto;
  padding: 15px;
  text-align: center;
  width: 20%;
  outline: none;
  transition: 0.5s;

  :focus {
    border: 1px solid ${Colors.blue3};
    border-bottom: 3px solid ${Colors.blue3};
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
  background-color: ${Colors.gray4};
  border-radius: 50%;
  display: flex;
  padding: 5px;
  margin: 10px;
`;

const IconCounter = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  color: ${Colors.white};
  background-color: ${Colors.blue3};
  padding: 10px;
  border-radius: 40%;
  width: 7px;
  height: 2px;
  margin: -10px 0 0 40px;
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
      <Link to="/test">
        <Logo src="./logo192.png" />
      </Link>
      <HomeIcon src="./media/icons/house.png" />
      <NavMenu ref={wrapperRef}>
        <div onClick={toggleDropdown}>
          <span>Menu</span>
        </div>
        {dropdownOpen && <>{<ExpandedMenu />}</>}
      </NavMenu>
      <SearchBoxInput placeholder="Search..." />
      <Link to="/test">
        <Icon src="./media/icons/house.svg" />
      </Link>
      <Link to="/test">
        <IconContainer>
          <IconCounter>3</IconCounter>
          <Icon src="./media/icons/comments.svg" />
        </IconContainer>
      </Link>
      <Link to="/test">
        <IconContainer>
          <IconCounter>3</IconCounter>
          <Icon src="./media/icons/bell.svg" />
        </IconContainer>
      </Link>
    </NavWrapper>
  );
};

export default TopNav;
