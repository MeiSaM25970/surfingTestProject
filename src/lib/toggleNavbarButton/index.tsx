import * as React from "react";

interface IToggleNavbarProps {
  icon: JSX.Element;
}

export const ToggleNavbar: React.FunctionComponent<IToggleNavbarProps> = ({
  icon,
}) => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      {icon}
    </button>
  );
};
