import * as React from "react";

import { INavbarItem } from "../../models";
import NavbarItem from "./navbarItem";

interface INavbarItemsProps {
  items: INavbarItem[];
}

export const NavbarItems: React.FunctionComponent<INavbarItemsProps> = ({
  items,
}) => {
  return (
    <>
      {items.map((item, index) => (
        <NavbarItem item={item} key={index} />
      ))}
    </>
  );
};
