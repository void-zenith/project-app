import React from "react";
import Logo from "../Icons/Logo";
import Time from "../Icons/Time";
import List from "../Icons/List";
import Search from "../Icons/Search";
import ToggleTheme from "../Icons/ToggleTheme";
import Wide from "../Icons/Wide";
import Logout from "../Icons/Logout";
import Line from "../Icons/Line";
const Navbar = () => {
  return (
    <div className="navbar-menu">
      <div className="navbar-menu__logo">
        <Logo></Logo>
      </div>
      <div className="navbar-menu__menus">
        <Time></Time>
        <List></List>
        <Search></Search>
        <ToggleTheme></ToggleTheme>
        <Wide></Wide>
        <Line></Line>
        <Logout></Logout>
      </div>
    </div>
  );
};

export default Navbar;
