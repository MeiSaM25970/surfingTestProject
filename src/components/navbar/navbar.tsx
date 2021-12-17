import * as React from "react";
import { Link } from "react-router-dom";

import { useServices } from "../../appContext";
import { ToggleNavbar } from "../../lib";
import { INavbarData } from "../../models";
import { NavbarItems } from "./navbarItems";

import styles from "./navbar.module.css";

export const Navbar: React.FunctionComponent<INavbarData> = ({
  brandIcon,
  navbarItems,
}) => {
  const service = useServices()!;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white container pt-5">
      {brandIcon && navbarItems && (
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={service.getAbsoluteUrl(brandIcon)} alt="brandName" />
          </Link>
          <ToggleNavbar icon={<span className="navbar-toggler-icon"></span>} />
          <div
            className={`collapse navbar-collapse ${styles.navItems}`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <NavbarItems items={navbarItems} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
