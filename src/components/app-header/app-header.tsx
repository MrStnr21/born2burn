import { FC } from "react";

import { NavLink } from "react-router-dom";

import Logo from "../../images/born2burnLogo.svg";

import stylesAppHeader from "./app-header.module.css";

const AppHeader: FC = () => {
  return (
    <header className={stylesAppHeader.header}>
      <img className={stylesAppHeader.logo} src={Logo} alt="Born2Burn" />
      <div className={stylesAppHeader.container}>
        <nav className={stylesAppHeader.navigation}>
          <ul className={stylesAppHeader.menu}>
            <li>
              <NavLink to="#" className={stylesAppHeader.link}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className={stylesAppHeader.link}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className={stylesAppHeader.link}>
                Album
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className={stylesAppHeader.link}>
                More
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { AppHeader };
