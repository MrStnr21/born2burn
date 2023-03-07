import { FC } from "react";

import stylesAboutB2B from "./aboutb2b.module.css";

import founders from "../../../images/founders/founders.png";

const AboutB2B: FC = () => {
  return (
    <section className={stylesAboutB2B.container}>
      <div className={stylesAboutB2B.aboutContainer}>
        <h2 className={stylesAboutB2B.title}>Кто мы?</h2>
        <p className={stylesAboutB2B.about}>
          Born2Burn&nbsp;&mdash; это молодое автомобильное движение, основанное
          в&nbsp;Москве в&nbsp;2015&nbsp;году. Клуб вдохновлен японской
          культурой стритрейсинга и&nbsp;является отражением стиля жизни его
          основателей. Члены клуба объединены любовью к&nbsp;машинам, тюнингу
          и&nbsp;гонкам. Клуб является местом для встреч единомышленников,
          которые делят общие интересы и&nbsp;страсти. Клуб продолжает
          развиваться и&nbsp;привлекать новых участников, которые готовы
          испытать свои машины на&nbsp;пределе возможностей.
        </p>
        <p className={stylesAboutB2B.tagline}>Drive hard.</p>
        <p className={stylesAboutB2B.tagline}>Die Last...</p>
      </div>
      <img className={stylesAboutB2B.image} src={founders} alt="Основатели" />
    </section>
  );
};

export { AboutB2B };
