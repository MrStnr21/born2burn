import { FC } from "react";
import { Link } from "react-router-dom";

import stylesFooter from "./footer.module.css";

import instagramLogo from "../../images/icons/instagram.png";

const Footer: FC = () => {
  return (
    <footer className={stylesFooter.footer}>
      <div className={stylesFooter.container}>
        <div className={stylesFooter.box}>
          <h2 className={stylesFooter.title}>contacts</h2>
          <ul className={stylesFooter.list}>
            <li className={stylesFooter.item}>
              <Link
                to="https://instagram.com/_eevl?igshid=YmMyMTA2M2Y="
                target="_blank"
                className={stylesFooter.listItem}
              >
                <img
                  src={instagramLogo}
                  alt="instagram"
                  className={stylesFooter.icon}
                />
                <p className={stylesFooter.text}>Born2Burn</p>
              </Link>
            </li>
            <li className={stylesFooter.item}>
              <Link
                to="https://instagram.com/_eevl?igshid=YmMyMTA2M2Y="
                target="_blank"
                className={stylesFooter.listItem}
              >
                <img
                  src={instagramLogo}
                  alt="instagram"
                  className={stylesFooter.icon}
                />
                <p className={stylesFooter.text}>Дима Бабкин</p>
              </Link>
            </li>
            <li className={stylesFooter.item}>
              <Link
                to="https://instagram.com/_eevl?igshid=YmMyMTA2M2Y="
                target="_blank"
                className={stylesFooter.listItem}
              >
                <img
                  src={instagramLogo}
                  alt="instagram"
                  className={stylesFooter.icon}
                />
                <p className={stylesFooter.text}>Ярослав Потрапелюк</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={stylesFooter.box}>
          <h2 className={stylesFooter.title}>shop</h2>
          <ul className={stylesFooter.list}>
            <li className={stylesFooter.item}>
              <Link to="#" target="_blank" className={stylesFooter.listItem}>
                <p className={stylesFooter.text}>Картины</p>
              </Link>
            </li>
            <li className={stylesFooter.item}>
              <Link to="#" target="_blank" className={stylesFooter.listItem}>
                <p className={stylesFooter.text}>Футболки</p>
              </Link>
            </li>
            <li className={stylesFooter.item}>
              <Link to="#" target="_blank" className={stylesFooter.listItem}>
                <p className={stylesFooter.text}>Толстовки</p>
              </Link>
            </li>
            <li className={stylesFooter.item}>
              <Link to="#" target="_blank" className={stylesFooter.listItem}>
                <p className={stylesFooter.text}>Брелоки</p>
              </Link>
            </li>
            <li className={stylesFooter.item}>
              <Link to="#" target="_blank" className={stylesFooter.listItem}>
                <p className={stylesFooter.text}>Доски</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={stylesFooter.box}>
          <h2 className={stylesFooter.title}>articles</h2>
          <ul className={stylesFooter.list}>
            <li className={stylesFooter.item}>
              <Link to="#" target="_blank" className={stylesFooter.listItem}>
                <p className={stylesFooter.text}>Календарь</p>
              </Link>
            </li>
            <li className={stylesFooter.item}>
              <Link to="#" target="_blank" className={stylesFooter.listItem}>
                <p className={stylesFooter.text}>Участники</p>
              </Link>
            </li>
            <li className={stylesFooter.item}>
              <Link to="#" target="_blank" className={stylesFooter.listItem}>
                <p className={stylesFooter.text}>Новости</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
