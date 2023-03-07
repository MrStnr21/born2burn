import { FC } from "react";

import stylesMembers from "./members.module.css";

import { v4 as uniqKey } from "uuid";
import ScrollContainer from "react-indiana-drag-scroll";

import { members } from "../../utils/members";

const Members: FC = () => {
  return (
    <section className={stylesMembers.container}>
      <h1 className={stylesMembers.title}>Участники</h1>
      <ul className={stylesMembers.membersList}>
        {members.map((item) => (
          <li key={uniqKey()} className={stylesMembers.memberItem}>
            <div className={stylesMembers.infoContainer}>
              <img
                src={item.image}
                alt={item.alt}
                className={stylesMembers.image}
              />
              <div className={stylesMembers.text}>
                <h2 className={stylesMembers.name}>{item.name}</h2>
                <p>{item.article}</p>
              </div>
            </div>
            <div className={stylesMembers.iconContainer}>
              <p className={stylesMembers.iconTip}>drag and move</p>
              <div className={stylesMembers.iconScroll} />
            </div>
            <ScrollContainer className={stylesMembers.collageContainer}>
              <img
                src={item.collage}
                alt={item.alt}
                className={stylesMembers.collage}
              />
            </ScrollContainer>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { Members };
