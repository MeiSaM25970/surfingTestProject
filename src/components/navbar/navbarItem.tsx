import * as React from "react";
import { NavLink } from "react-router-dom";

import { INavbarItem } from "../../models";

import styles from "./navbar.module.css";
interface INavbarItemProps {
  item: INavbarItem;
}

const NavbarItem: React.FunctionComponent<INavbarItemProps> = ({ item }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `nav-link active ${styles.navItem}`
          : `nav-link  ${styles.navItem}`
      }
      to={item.link}
    >
      {item.title}
    </NavLink>
  );
};

export default NavbarItem;
