import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Searchbar from "../Searchbar";
import ThemeSwitch from "../ThemeSwitch";
import {
  NavbarContent,
  NavbarWrapper,
  NavbarMenu,
  NavbarResponseMenu,
} from "./styled";

const Navbar = ({
  setIsMenuHidden,
  isMenuHidden,
  setSearchValue,
  handleSearchClick,
  setCurrentTheme,
}) => {
  return (
    <NavbarWrapper>
      <NavbarContent>
        <Searchbar
          setSearchValue={setSearchValue}
          handleSearchClick={handleSearchClick}
        />
        <NavbarMenu>
          <NavLink
            to="/"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "menu_item_active" : "menu_item"
            }
          >
            Current
          </NavLink>
          <NavLink
            to="/daily"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "menu_item_active" : "menu_item"
            }
          >
            Daily
          </NavLink>
          <NavLink
            to="/hourly"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "menu_item_active" : "menu_item"
            }
          >
            Hourly
          </NavLink>
        </NavbarMenu>
        <ThemeSwitch setCurrentTheme={setCurrentTheme} />
      </NavbarContent>
      <NavbarResponseMenu
        active={!isMenuHidden}
        onClick={() => setIsMenuHidden((prev) => !prev)}
      >
        <AiOutlineMenu style={{ fontSize: 24, color: "#fff" }} />
      </NavbarResponseMenu>
    </NavbarWrapper>
  );
};

export default Navbar;
