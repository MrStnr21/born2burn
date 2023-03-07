import { FC } from "react";

import stylesWelcome from "./welcome.module.css";

import background from "../../../images/founders/welcome.png";

const Welcome: FC = () => {
  return (
    <section
      className={stylesWelcome.container}
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className={stylesWelcome.title}>
        born2<span className={stylesWelcome.titleRight}>burn</span>
      </h1>
      <div className={stylesWelcome.iconScroll}></div>
    </section>
  );
};

export { Welcome };
